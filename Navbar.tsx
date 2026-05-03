'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { Menu, X, Sun, Moon } from 'lucide-react'

const NAV_ITEMS = [
  { label: '📔 Diary',        href: '/diary',        color: 'diary',    accent: '#f5c842' },
  { label: '💼 Professional', href: '/professional', color: 'pro',      accent: '#38d9f5' },
  { label: '🔬 Research',     href: '/research',     color: 'research', accent: '#9b6dff' },
  { label: '✍️ Blog',         href: '/blog',         color: 'green',    accent: '#39e5a0' },
]

const activeColors: Record<string, string> = {
  diary:    'text-diary-gold bg-diary-gold/10',
  pro:      'text-pro-cyan bg-pro-cyan/10',
  research: 'text-research-violet bg-research-violet/10',
  green:    'text-research-green bg-research-green/10',
}

const accentColors: Record<string, string> = {
  diary: '#f5c842', pro: '#38d9f5', research: '#9b6dff', green: '#39e5a0',
}

export default function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dark, setDark] = useState(true)
  const [scrolled, setScrolled] = useState(false)

  // Scroll progress bar
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 300, damping: 30 })

  // Active section color for progress bar
  const activeItem = NAV_ITEMS.find(i => pathname.startsWith(i.href))
  const progressColor = activeItem ? accentColors[activeItem.color] : '#39e5a0'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function toggleTheme() {
    const next = !dark; setDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  return (
    <>
      {/* Scroll progress */}
      <motion.div
        style={{ scaleX, transformOrigin: '0%' }}
        className="fixed top-0 left-0 right-0 h-[2px] z-[999] origin-left"
        style2={{ background: progressColor }}
      />

      <motion.nav
        initial={{ y: -64 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 h-16 flex items-center justify-between px-6 md:px-12 z-50 transition-all duration-300',
          scrolled
            ? 'bg-bg/90 backdrop-blur-xl border-b border-white/7 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
            : 'bg-transparent'
        )}
      >
        {/* Logo */}
        <Link href="/" className="font-serif text-lg italic text-white hover:text-diary-gold transition-colors group flex items-center gap-2">
          <span className="text-gradient-diary group-hover:opacity-80 transition-opacity">Aranya</span>
          <span className="text-white">Ghosh</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex border border-white/13 overflow-hidden">
          {NAV_ITEMS.map(item => {
            const isActive = pathname.startsWith(item.href)
            return (
              <Link key={item.href} href={item.href}
                className={cn(
                  'relative px-4 py-2 font-mono text-[11px] tracking-widest uppercase',
                  'border-r border-white/13 last:border-r-0',
                  'transition-all duration-200',
                  isActive ? activeColors[item.color] : 'text-text-muted hover:text-white hover:bg-white/5'
                )}
              >
                {item.label}
                {isActive && (
                  <motion.div layoutId="nav-active-bg" className="absolute inset-0 -z-10 opacity-20"
                    style={{ background: item.accent }} />
                )}
                {isActive && (
                  <motion.div layoutId="nav-underline" className="absolute bottom-0 left-0 right-0 h-0.5"
                    style={{ background: item.accent }} />
                )}
              </Link>
            )
          })}
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          <button onClick={toggleTheme}
            className="flex items-center justify-center w-8 h-8 border border-white/13 text-text-muted hover:text-white hover:border-white/30 transition-colors">
            {dark ? <Sun size={13} /> : <Moon size={13} />}
          </button>
          <Link href="/" className="font-mono text-[11px] text-text-muted hover:text-white transition-colors tracking-widest uppercase hidden md:block border border-white/13 px-3 py-1.5 hover:border-white/30">
            ← home
          </Link>
          {/* Mobile menu toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)}
            className="flex md:hidden items-center justify-center w-8 h-8 border border-white/13 text-text-muted hover:text-white">
            {mobileOpen ? <X size={14} /> : <Menu size={14} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 bg-bg-2/95 backdrop-blur-xl border-b border-white/7 z-40 flex flex-col">
            {NAV_ITEMS.map(item => (
              <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)}
                className={cn(
                  'px-6 py-4 font-mono text-sm border-b border-white/7 transition-colors',
                  pathname.startsWith(item.href) ? 'text-white bg-white/5' : 'text-text-muted hover:text-white'
                )}
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
