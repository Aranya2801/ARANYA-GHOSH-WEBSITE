import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { saveContactMessage } from '@/lib/db'
import { SITE } from '@/lib/site'

export const runtime = 'nodejs'

const Body = z.object({
  name: z.string().trim().min(1, 'Please enter your name.').max(100),
  email: z.string().trim().email('Please enter a valid email address.').max(200),
  subject: z.string().trim().max(150).optional().default(''),
  message: z.string().trim().min(10, 'Message should be at least 10 characters.').max(4000),
  website: z.string().optional(), // honeypot
})

// Best-effort limiter: 5 messages per hour per IP (per server instance).
const hits = new Map<string, number[]>()
const WINDOW = 60 * 60 * 1000
const LIMIT = 5

function limited(ip: string) {
  const now = Date.now()
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW)
  if (recent.length >= LIMIT) {
    hits.set(ip, recent)
    return true
  }
  recent.push(now)
  hits.set(ip, recent)
  if (hits.size > 5000) hits.clear()
  return false
}

const escapeHtml = (s: string) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!)

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
  if (limited(ip)) return NextResponse.json({ error: 'Too many messages — please try again later.' }, { status: 429 })

  let json: unknown
  try {
    json = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  const parsed = Body.safeParse(json)
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0]?.message ?? 'Invalid input.' }, { status: 400 })
  }
  const { website, ...msg } = parsed.data
  // Bots fill the hidden field. Pretend success, deliver nothing.
  if (website) return NextResponse.json({ ok: true })

  const resendKey = process.env.RESEND_API_KEY
  const hasDb = !!process.env.DATABASE_URL
  if (!resendKey && !hasDb) {
    return NextResponse.json({ error: `Messages aren't enabled on this site yet — please email ${SITE.email} directly.` }, { status: 503 })
  }

  let stored = false
  try {
    stored = await saveContactMessage(msg)
  } catch (err) {
    console.error('[contact] database error', err)
  }

  let emailed = false
  if (resendKey) {
    try {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { Authorization: `Bearer ${resendKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from: process.env.CONTACT_FROM_EMAIL ?? 'Website <onboarding@resend.dev>',
          to: [process.env.CONTACT_TO_EMAIL ?? SITE.email],
          reply_to: msg.email,
          subject: `[${SITE.url.replace(/^https?:\/\//, '')}] ${msg.subject || 'New message'} — ${msg.name}`,
          text: `From: ${msg.name} <${msg.email}>\n\n${msg.message}`,
          html: `<p><b>${escapeHtml(msg.name)}</b> &lt;${escapeHtml(msg.email)}&gt;</p><p style="white-space:pre-wrap">${escapeHtml(msg.message)}</p>`,
        }),
      })
      emailed = res.ok
      if (!res.ok) console.error('[contact] resend error', res.status, await res.text())
    } catch (err) {
      console.error('[contact] resend failed', err)
    }
  }

  if (!stored && !emailed) {
    return NextResponse.json({ error: `Couldn't deliver your message — please email ${SITE.email} directly.` }, { status: 502 })
  }
  return NextResponse.json({ ok: true })
}
