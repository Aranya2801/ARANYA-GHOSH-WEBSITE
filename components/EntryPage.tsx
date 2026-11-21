import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Markdown from '@/components/Markdown'
import { ACCENT, Tag, type Accent } from '@/components/ui'
import type { Entry } from '@/lib/content'
import { cn, formatDate } from '@/lib/utils'
import { SITE } from '@/lib/site'

export default function EntryPage({ entry, accent, backHref, backLabel }: { entry: Entry; accent: Accent; backHref: string; backLabel: string }) {
  const url = `${SITE.url}/${entry.kind}/${entry.slug}`
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': entry.kind === 'blog' ? 'BlogPosting' : 'Article',
    headline: entry.title,
    datePublished: entry.date,
    description: entry.excerpt,
    keywords: entry.tags.join(', '),
    author: { '@type': 'Person', name: SITE.name, url: SITE.url },
    mainEntityOfPage: url,
  }
  return (
    <article className="mx-auto max-w-3xl px-6 py-14">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Link href={backHref} className="mb-8 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-muted hover:text-strong">
        <ArrowLeft size={12} aria-hidden /> {backLabel}
      </Link>
      <header className="mb-10 border-b border-line/10 pb-8">
        <div className={cn('mb-3 flex flex-wrap gap-x-3 font-mono text-[11px] uppercase tracking-widest', ACCENT[accent].label)}>
          <time dateTime={entry.date}>{formatDate(entry.date, { month: 'long' })}</time>
          <span aria-hidden>·</span>
          <span>{entry.readTime} min read</span>
          {entry.mood && (
            <>
              <span aria-hidden>·</span>
              <span>{entry.mood}</span>
            </>
          )}
        </div>
        <h1 className="font-serif text-4xl font-black leading-tight text-strong md:text-5xl">{entry.title}</h1>
        {entry.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {entry.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        )}
      </header>

      {entry.youtube && (
        <div className="mb-10 aspect-video w-full border border-line/10">
          <iframe
            className="h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${entry.youtube}`}
            title={`${entry.title} — video`}
            loading="lazy"
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}

      <Markdown>{entry.body}</Markdown>
    </article>
  )
}
