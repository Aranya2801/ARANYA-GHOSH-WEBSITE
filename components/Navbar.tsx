'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion'
import { Menu, Moon, Search, Sun, X } from 'lucide-react'
import { NAV } from '@/lib/site'
import { cn } from '@/lib/utils'

const ACTIVE: Record<string, string> = {
  gold: 'text-diary-gold bg-diary-gold/10 border-b-diary-gold',
  cyan: 'text-pro-cyan bg-pro-cyan/10 border-b-pro-cyan',
  violet: 'text-research-violet bg-research-violet/10 border-b-research-violet',
  green: 'text-research-green bg-research-green/10 border-b-research-green',
}

type Theme = 'dark' | 'light'

export function setTheme(next: Theme) {
  document.documentElement.dataset.theme = next
  try {
    localStorage.setItem('theme', next)
  } catch {
    /* private mode — theme just won't persist */
  }
}

export function currentTheme(): Theme {
  return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark'
}

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [theme, setThemeState] = useState<Theme | null>(null)
  const [mac, setMac] = useState(false)

  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 300, damping: 30 })

  useEffect(() => {
    setThemeState(currentTheme())
    setMac(/Mac|iPhone|iPad/.test(navigator.platform))
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  function toggleTheme() {
    const next: Theme = currentTheme() === 'dark' ? 'light' : 'dark'
    setTheme(next)
    setThemeState(next)
  }

  return (
    <>
      <motion.div
        aria-hidden
        style={{ scaleX: progress }}
        className="no-print fixed left-0 right-0 top-0 z-[70] h-[2px] origin-left bg-research-green"
      />

      <nav
        aria-label="Primary"
        className={cn(
          'no-print fixed inset-x-0 top-0 z-50 flex h-16 items-center justify-between px-5 transition-colors duration-300 md:px-10',
          scrolled ? 'border-b border-line/10 bg-bg/85 backdrop-blur-xl' : 'bg-transparent'
        )}
      >
        <Link href="/" className="font-serif text-lg italic text-strong transition-colors hover:text-diary-gold">
          Aranya <span className="text-diary-gold">Ghosh</span>
        </Link>

        <ul className="hidden border border-line/20 md:flex">
          {NAV.map((item) => {
            const active = pathname.startsWith(item.href)
            return (
              <li key={item.href} className="border-r border-line/20 last:border-r-0">
                <Link
                  href={item.href}
                  aria-current={active ? 'page' : undefined}
                  className={cn(
                    'block border-b-2 px-4 py-2 font-mono text-[11px] uppercase tracking-widest transition-colors',
                    active ? ACTIVE[item.accent] : 'border-b-transparent text-muted hover:bg-line/5 hover:text-strong'
                  )}
                >
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => window.dispatchEvent(new Event('open-palette'))}
            className="hidden items-center gap-2 border border-line/20 px-3 py-1.5 font-mono text-[11px] text-muted transition-colors hover:border-line/40 hover:text-strong sm:flex"
            aria-label="Open command palette"
          >
            <Search size={12} />
            <span>{mac ? '⌘K' : 'Ctrl K'}</span>
          </button>
          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-8 w-8 items-center justify-center border border-line/20 text-muted transition-colors hover:border-line/40 hover:text-strong"
            aria-label={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
          >
            {theme === 'light' ? <Moon size={14} /> : <Sun size={14} />}
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-8 w-8 items-center justify-center border border-line/20 text-muted hover:text-strong md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={14} /> : <Menu size={14} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.18 }}
            className="no-print fixed inset-x-0 top-16 z-40 border-b border-line/10 bg-bg-2/95 backdrop-blur-xl md:hidden"
          >
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'block border-b border-line/10 px-6 py-4 font-mono text-sm',
                  pathname.startsWith(item.href) ? 'bg-line/5 text-strong' : 'text-muted hover:text-strong'
                )}
              >
                {item.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={() => {
                setOpen(false)
                window.dispatchEvent(new Event('open-palette'))
              }}
              className="block w-full px-6 py-4 text-left font-mono text-sm text-muted hover:text-strong"
            >
              Search…
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
