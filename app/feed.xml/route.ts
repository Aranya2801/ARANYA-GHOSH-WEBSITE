import { getEntries } from '@/lib/content'
import { SITE } from '@/lib/site'

export const dynamic = 'force-static'

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' })[c]!)

export function GET() {
  const posts = getEntries('blog')
  const items = posts
    .map(
      (p) => `<item><title>${esc(p.title)}</title><link>${SITE.url}/blog/${p.slug}</link><guid>${SITE.url}/blog/${p.slug}</guid><pubDate>${new Date(p.date).toUTCString()}</pubDate><description>${esc(p.excerpt)}</description></item>`
    )
    .join('')
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>${esc(SITE.name)} — Blog</title><link>${SITE.url}/blog</link><description>${esc(SITE.description)}</description><language>en</language>${items}</channel></rss>`
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } })
}
