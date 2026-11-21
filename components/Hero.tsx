'use client'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ACCENT, type Accent } from '@/components/ui'
import { cn } from '@/lib/utils'

export interface World {
  href: string
  title: string
  tagline: string
  desc: string
  accent: Accent
}

/** Ambient particle field. Pauses when the tab is hidden and is skipped entirely under reduced motion. */
function Particles() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas || matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let w = 0
    let h = 0
    let raf = 0
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const resize = () => {
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    const count = w < 640 ? 28 : 60
    const pts = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      const style = getComputedStyle(document.documentElement)
      const rgb = style.getPropertyValue('--cyan').trim() || '56 217 245'
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i]
        p.x = (p.x + p.vx + w) % w
        p.y = (p.y + p.vy + h) % h
        ctx.fillStyle = `rgb(${rgb} / 0.55)`
        ctx.fillRect(p.x, p.y, 1.5, 1.5)
        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j]
          const d = Math.hypot(p.x - q.x, p.y - q.y)
          if (d < 110) {
            ctx.strokeStyle = `rgb(${rgb} / ${0.12 * (1 - d / 110)})`
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.stroke()
          }
        }
      }
      raf = requestAnimationFrame(draw)
    }
    const onVis = () => {
      cancelAnimationFrame(raf)
      if (!document.hidden) raf = requestAnimationFrame(draw)
    }
    raf = requestAnimationFrame(draw)
    document.addEventListener('visibilitychange', onVis)
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(raf)
      document.removeEventListener('visibilitychange', onVis)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={ref} aria-hidden className="absolute inset-0 h-full w-full opacity-70" />
}

function WorldCard({ world, index }: { world: World; index: number }) {
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [5, -5]), { stiffness: 200, damping: 20 })
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-5, 5]), { stiffness: 200, damping: 20 })
  const a = ACCENT[world.accent]

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.25 + index * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
      onPointerMove={(e) => {
        if (e.pointerType !== 'mouse') return
        const r = e.currentTarget.getBoundingClientRect()
        mx.set((e.clientX - r.left) / r.width - 0.5)
        my.set((e.clientY - r.top) / r.height - 0.5)
      }}
      onPointerLeave={() => {
        mx.set(0)
        my.set(0)
      }}
    >
      <Link
        href={world.href}
        className={cn('group relative block h-full overflow-hidden border border-line/15 border-t-2 border-t-transparent bg-bg-2/80 p-6 backdrop-blur transition-colors', a.hoverBorderT)}
      >
        <div className={cn('mb-4 font-mono text-[10px] uppercase tracking-widest', a.label)}>0{index + 1}</div>
        <h2 className="font-serif text-2xl font-black text-strong">{world.title}</h2>
        <p className={cn('mt-1 text-sm italic', a.text)}>{world.tagline}</p>
        <p className="mt-4 text-xs leading-relaxed text-muted">{world.desc}</p>
        <span className={cn('mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-muted transition-colors', a.hoverText)}>
          Enter <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" aria-hidden />
        </span>
      </Link>
    </motion.div>
  )
}

export default function Hero({
  name,
  tagline,
  blurb,
  stats,
  worlds,
}: {
  name: string
  tagline: string
  blurb: string
  stats: { value: string; label: string }[]
  worlds: World[]
}) {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-16 md:px-12 md:pt-24">
      <Particles />
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-6xl">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.05 }} className="mb-4 font-mono text-[11px] uppercase tracking-widest text-pro-cyan">
          {tagline}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-[clamp(3rem,10vw,8rem)] font-black leading-[0.9] text-strong"
        >
          {name.split(' ')[0]}
          <br />
          <span className="text-gradient-pro italic">{name.split(' ').slice(1).join(' ')}</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          {blurb}
        </motion.p>

        <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-serif text-3xl font-black text-strong">{s.value}</dd>
              <dd className="font-mono text-[10px] uppercase tracking-widest text-muted">{s.label}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {worlds.map((w, i) => (
            <WorldCard key={w.href} world={w} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
