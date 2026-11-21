'use client'
import { useCallback, useEffect, useId, useMemo, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { CornerDownLeft, Search } from 'lucide-react'
import { SITE, NAV } from '@/lib/site'
import { currentTheme, setTheme } from '@/components/Navbar'
import { cn } from '@/lib/utils'

export interface PaletteEntry {
  title: string
  href: string
  kind: 'blog' | 'diary'
}

interface Item {
  id: string
  label: string
  group: 'Go to' | 'Writing' | 'Actions'
  hint?: string
  run: () => void
}

/** ⌘K / Ctrl+K — jump anywhere, open a post, switch theme, copy email. */
export default function CommandPalette({ entries }: { entries: PaletteEntry[] }) {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(0)
  const [toast, setToast] = useState<string | null>(null)
  const listRef = useRef<HTMLUListElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const listId = useId()

  const close = useCallback(() => {
    setOpen(false)
    setQuery('')
    setActive(0)
  }, [])

  const items = useMemo<Item[]>(() => {
    const go = (href: string) => () => {
      close()
      router.push(href)
    }
    const external = (url: string) => () => {
      close()
      window.open(url, '_blank', 'noopener,noreferrer')
    }
    return [
      { id: 'home', label: 'Home', group: 'Go to', run: go('/') },
      ...NAV.map((n) => ({ id: n.href, label: n.label, group: 'Go to' as const, run: go(n.href) })),
      ...entries.map((e) => ({
        id: e.href,
        label: e.title,
        group: 'Writing' as const,
        hint: e.kind === 'diary' ? 'Diary' : 'Blog',
        run: go(e.href),
      })),
      {
        id: 'theme',
        label: 'Toggle light / dark theme',
        group: 'Actions',
        run: () => {
          setTheme(currentTheme() === 'dark' ? 'light' : 'dark')
          close()
        },
      },
      {
        id: 'copy-email',
        label: 'Copy email address',
        group: 'Actions',
        hint: SITE.email,
        run: () => {
          navigator.clipboard?.writeText(SITE.email).then(
            () => setToast('Email copied'),
            () => setToast('Could not copy — use the contact form')
          )
          close()
        },
      },
      { id: 'gh', label: 'Open GitHub', group: 'Actions', hint: SITE.github, run: external(SITE.githubUrl) },
      { id: 'li', label: 'Open LinkedIn', group: 'Actions', run: external(SITE.linkedinUrl) },
      { id: 'rss', label: 'RSS feed', group: 'Actions', run: go('/feed.xml') },
    ]
  }, [entries, router, close])

  const results = useMemo(() => {
    const tokens = query.toLowerCase().split(/\s+/).filter(Boolean)
    if (!tokens.length) return items
    return items.filter((i) => {
      const hay = `${i.label} ${i.group} ${i.hint ?? ''}`.toLowerCase()
      return tokens.every((t) => hay.includes(t))
    })
  }, [items, query])

  useEffect(() => setActive(0), [query])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setOpen((v) => !v)
      }
    }
    const onOpen = () => setOpen(true)
    window.addEventListener('keydown', onKey)
    window.addEventListener('open-palette', onOpen)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('open-palette', onOpen)
    }
  }, [])

  useEffect(() => {
    if (open) inputRef.current?.focus()
  }, [open])

  useEffect(() => {
    listRef.current?.querySelector('[aria-selected="true"]')?.scrollIntoView({ block: 'nearest' })
  }, [active, results])

  useEffect(() => {
    if (!toast) return
    const t = setTimeout(() => setToast(null), 2200)
    return () => clearTimeout(t)
  }, [toast])

  function onInputKey(e: React.KeyboardEvent) {
    if (e.key === 'Escape') return close()
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActive((i) => Math.min(i + 1, results.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActive((i) => Math.max(i - 1, 0))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      results[active]?.run()
    }
  }

  return (
    <>
      {open && (
        <div
          className="no-print fixed inset-0 z-[80] flex items-start justify-center bg-black/60 px-4 pt-[14vh] backdrop-blur-sm"
          onMouseDown={(e) => e.target === e.currentTarget && close()}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
            className="w-full max-w-xl overflow-hidden border border-line/20 bg-bg-2 shadow-2xl"
          >
            <div className="flex items-center gap-3 border-b border-line/10 px-4">
              <Search size={15} className="text-muted" aria-hidden />
              <input
                ref={inputRef}
                role="combobox"
                aria-expanded="true"
                aria-controls={listId}
                aria-activedescendant={results[active] ? `${listId}-${active}` : undefined}
                aria-label="Search pages, posts and actions"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={onInputKey}
                placeholder="Search pages, posts, actions…"
                className="h-12 w-full bg-transparent font-mono text-sm text-strong outline-none placeholder:text-muted"
              />
              <kbd className="border border-line/20 px-1.5 py-0.5 font-mono text-[10px] text-muted">esc</kbd>
            </div>

            <ul id={listId} ref={listRef} role="listbox" className="max-h-[50vh] overflow-y-auto py-1">
              {results.length === 0 && <li className="px-4 py-8 text-center font-mono text-xs text-muted">No matches</li>}
              {results.map((item, i) => {
                const newGroup = i === 0 || results[i - 1].group !== item.group
                return (
                  <li key={item.id} role="presentation">
                    {newGroup && (
                      <div className="px-4 pb-1 pt-3 font-mono text-[10px] uppercase tracking-widest text-muted">{item.group}</div>
                    )}
                    <div
                      id={`${listId}-${i}`}
                      role="option"
                      aria-selected={i === active}
                      onMouseEnter={() => setActive(i)}
                      onClick={item.run}
                      className={cn(
                        'flex cursor-pointer items-center justify-between gap-3 px-4 py-2.5 text-sm',
                        i === active ? 'bg-research-green/10 text-strong' : 'text-ink'
                      )}
                    >
                      <span className="truncate">{item.label}</span>
                      <span className="flex shrink-0 items-center gap-2 font-mono text-[10px] text-muted">
                        {item.hint}
                        {i === active && <CornerDownLeft size={11} aria-hidden />}
                      </span>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      )}

      <div role="status" aria-live="polite" className="pointer-events-none fixed bottom-6 left-1/2 z-[90] -translate-x-1/2">
        {toast && <div className="border border-line/20 bg-bg-2 px-4 py-2 font-mono text-xs text-strong shadow-xl">{toast}</div>}
      </div>
    </>
  )
}
