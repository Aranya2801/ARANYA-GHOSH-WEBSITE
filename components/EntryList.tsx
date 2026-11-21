'use client'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { ACCENT, EmptyState, Tag, type Accent } from '@/components/ui'
import { Stagger, StaggerItem } from '@/components/ui/motion'
import { cn } from '@/lib/utils'

export interface ListEntry {
  kind: 'blog' | 'diary'
  slug: string
  title: string
  date: string
  excerpt: string
  tags: string[]
  mood?: string
  readTime: number
  featured: boolean
}

const fmt = (iso: string) => new Intl.DateTimeFormat('en-US', { dateStyle: 'medium', timeZone: 'UTC' }).format(new Date(iso))

const ACTIVE_CHIP: Record<Accent, string> = {
  gold: 'border-diary-gold bg-diary-gold/10 text-diary-gold',
  cyan: 'border-pro-cyan bg-pro-cyan/10 text-pro-cyan',
  violet: 'border-research-violet bg-research-violet/10 text-research-violet',
  green: 'border-research-green bg-research-green/10 text-research-green',
}

export default function EntryList({
  entries,
  accent,
  emptyMessage,
}: {
  entries: ListEntry[]
  accent: Accent
  emptyMessage: React.ReactNode
}) {
  const [tag, setTag] = useState<string | null>(null)
  const [q, setQ] = useState('')

  const tags = useMemo(() => {
    const counts = new Map<string, number>()
    entries.forEach((e) => e.tags.forEach((t) => counts.set(t, (counts.get(t) ?? 0) + 1)))
    return [...counts.entries()].sort((a, b) => b[1] - a[1]).map(([t]) => t)
  }, [entries])

  const shown = useMemo(() => {
    const needle = q.trim().toLowerCase()
    return entries.filter(
      (e) => (!tag || e.tags.includes(tag)) && (!needle || `${e.title} ${e.excerpt} ${e.tags.join(' ')}`.toLowerCase().includes(needle))
    )
  }, [entries, tag, q])

  if (entries.length === 0) return <EmptyState>{emptyMessage}</EmptyState>

  return (
    <div>
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <label className="block w-full md:max-w-xs">
          <span className="sr-only">Filter entries</span>
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Filter…"
            className="w-full border border-line/20 bg-bg-2 px-3 py-2 font-mono text-xs text-strong outline-none placeholder:text-muted focus:border-line/50"
          />
        </label>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by tag">
            {['All', ...tags].map((t) => {
              const on = t === 'All' ? tag === null : tag === t
              return (
                <button
                  key={t}
                  type="button"
                  aria-pressed={on}
                  onClick={() => setTag(t === 'All' ? null : t)}
                  className={cn(
                    'border px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest transition-colors',
                    on ? ACTIVE_CHIP[accent] : 'border-line/20 text-muted hover:text-strong'
                  )}
                >
                  {t}
                </button>
              )
            })}
          </div>
        )}
      </div>

      {shown.length === 0 ? (
        <EmptyState>Nothing matches that filter.</EmptyState>
      ) : (
        <Stagger className="grid gap-px border border-line/10 bg-line/10">
          {shown.map((e) => (
            <StaggerItem key={`${e.kind}-${e.slug}`}>
              <Link
                href={`/${e.kind}/${e.slug}`}
                className={cn('group block border-l-2 border-l-transparent bg-bg-2 p-6 transition-colors hover:bg-bg-3', ACCENT[accent].hoverBorderL)}
              >
                <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[10px] uppercase tracking-widest text-muted">
                  <time dateTime={e.date}>{fmt(e.date)}</time>
                  <span aria-hidden>·</span>
                  <span>{e.readTime} min read</span>
                  {e.mood && (
                    <>
                      <span aria-hidden>·</span>
                      <span>{e.mood}</span>
                    </>
                  )}
                </div>
                <h3 className={cn('flex items-start justify-between gap-4 font-serif text-xl font-bold text-strong transition-colors', ACCENT[accent].hoverText)}>
                  {e.title}
                  <ArrowUpRight size={16} className="mt-1.5 shrink-0 text-muted" aria-hidden />
                </h3>
                {e.excerpt && <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">{e.excerpt}</p>}
                {e.tags.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {e.tags.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                )}
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      )}
    </div>
  )
}
