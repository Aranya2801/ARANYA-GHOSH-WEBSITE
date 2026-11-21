'use client'
import { useState } from 'react'
import { Send } from 'lucide-react'

type State = { kind: 'idle' } | { kind: 'sending' } | { kind: 'ok' } | { kind: 'error'; message: string }

const field =
  'w-full border border-line/20 bg-bg-2 px-3 py-2.5 text-sm text-strong outline-none placeholder:text-muted/70 focus:border-pro-cyan'

export default function ContactForm({ email }: { email: string }) {
  const [state, setState] = useState<State>({ kind: 'idle' })

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())
    setState({ kind: 'sending' })
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = (await res.json().catch(() => ({}))) as { error?: string }
      if (!res.ok) {
        setState({ kind: 'error', message: json.error ?? 'Something went wrong. Please try again.' })
        return
      }
      form.reset()
      setState({ kind: 'ok' })
    } catch {
      setState({ kind: 'error', message: 'Network error — please try again, or email me directly.' })
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4" noValidate>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-1.5 font-mono text-[11px] uppercase tracking-widest text-muted">
          Name
          <input name="name" required maxLength={100} autoComplete="name" className={field} />
        </label>
        <label className="grid gap-1.5 font-mono text-[11px] uppercase tracking-widest text-muted">
          Email
          <input name="email" type="email" required maxLength={200} autoComplete="email" className={field} />
        </label>
      </div>
      <label className="grid gap-1.5 font-mono text-[11px] uppercase tracking-widest text-muted">
        Subject <span className="normal-case tracking-normal">(optional)</span>
        <input name="subject" maxLength={150} className={field} />
      </label>
      <label className="grid gap-1.5 font-mono text-[11px] uppercase tracking-widest text-muted">
        Message
        <textarea name="message" required rows={6} minLength={10} maxLength={4000} className={field} />
      </label>

      {/* Honeypot — real people never see or fill this */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={state.kind === 'sending'}
          className="inline-flex items-center gap-2 border border-pro-cyan bg-pro-cyan/10 px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-pro-cyan transition-colors hover:bg-pro-cyan/20 disabled:opacity-60"
        >
          <Send size={13} aria-hidden /> {state.kind === 'sending' ? 'Sending…' : 'Send message'}
        </button>
        <p role="status" aria-live="polite" className="font-mono text-xs">
          {state.kind === 'ok' && <span className="text-research-green">Sent — thank you. I&apos;ll reply by email.</span>}
          {state.kind === 'error' && (
            <span className="text-diary-rose">
              {state.message} (<a className="underline" href={`mailto:${email}`}>{email}</a>)
            </span>
          )}
        </p>
      </div>
    </form>
  )
}
