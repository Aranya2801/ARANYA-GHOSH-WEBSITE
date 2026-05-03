'use client'
import Link from 'next/link'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const WORLDS = [
  {
    href: '/diary',
    icon: '📔',
    title: 'My Diary',
    subtitle: 'The human behind the engineer',
    desc: 'Life chapters · Memories · Music · Cinema · Daily vlogs',
    accent: '#f5c842',
    glow: 'rgba(245,200,66,0.15)',
    border: 'hover:border-diary-gold',
    textAccent: 'text-diary-gold',
    bgGlow: 'rgba(245,200,66,0.06)',
  },
  {
    href: '/professional',
    icon: '💼',
    title: 'Professional',
    subtitle: 'The engineer building the future',
    desc: 'Resume · Projects · Skills · GitHub Stats · Certifications',
    accent: '#38d9f5',
    glow: 'rgba(56,217,245,0.15)',
    border: 'hover:border-pro-cyan',
    textAccent: 'text-pro-cyan',
    bgGlow: 'rgba(56,217,245,0.06)',
  },
  {
    href: '/research',
    icon: '🔬',
    title: 'Research',
    subtitle: 'The scientist at the frontier',
    desc: 'Publications · IIT-KGP · IIIT-N · PhD Journey',
    accent: '#9b6dff',
    glow: 'rgba(155,109,255,0.15)',
    border: 'hover:border-research-violet',
    textAccent: 'text-research-violet',
    bgGlow: 'rgba(155,109,255,0.06)',
  },
  {
    href: '/blog',
    icon: '✍️',
    title: 'Blog',
    subtitle: 'Thoughts on AI & research',
    desc: 'Deep dives · ML insights · Research notes · Tutorials',
    accent: '#39e5a0',
    glow: 'rgba(57,229,160,0.15)',
    border: 'hover:border-research-green',
    textAccent: 'text-research-green',
    bgGlow: 'rgba(57,229,160,0.06)',
  },
]

const STATS = [
  { value: 'AIR 3', label: 'GATE 2026 DS & AI' },
  { value: '9.22', label: 'BTech CGPA' },
  { value: '1', label: 'Published Paper' },
  { value: 'Fall \'26', label: 'MS @ Rutgers' },
]

// Particle canvas
function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    let animId: number
    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number; color: string }[] = []
    const COLORS = ['#39e5a0', '#9b6dff', '#f5c842', '#38d9f5']

    function resize() {
      canvas!.width = window.innerWidth
      canvas!.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.4 + 0.1,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      })
    }

    function draw() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height)
      particles.forEach((p, i) => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0) p.x = canvas!.width
        if (p.x > canvas!.width) p.x = 0
        if (p.y < 0) p.y = canvas!.height
        if (p.y > canvas!.height) p.y = 0
        ctx!.beginPath()
        ctx!.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx!.fillStyle = p.color + Math.floor(p.opacity * 255).toString(16).padStart(2, '0')
        ctx!.fill()
        // Connect nearby particles
        particles.slice(i + 1).forEach(p2 => {
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y)
          if (dist < 120) {
            ctx!.beginPath()
            ctx!.moveTo(p.x, p.y); ctx!.lineTo(p2.x, p2.y)
            ctx!.strokeStyle = `rgba(255,255,255,${0.04 * (1 - dist / 120)})`
            ctx!.lineWidth = 0.5; ctx!.stroke()
          }
        })
      })
      animId = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize) }
  }, [])
  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
}

// Magnetic world card
function WorldCard({ world, index }: { world: typeof WORLDS[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0); const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-60, 60], [8, -8]), { stiffness: 200, damping: 20 })
  const rotateY = useSpring(useTransform(x, [-60, 60], [-8, 8]), { stiffness: 200, damping: 20 })

  function onMouseMove(e: React.MouseEvent) {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    x.set(e.clientX - rect.left - rect.width / 2)
    y.set(e.clientY - rect.top - rect.height / 2)
  }
  function onMouseLeave() { x.set(0); y.set(0) }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 1000 }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <Link
        href={world.href}
        className={`group relative flex flex-col text-left p-6 w-52 border border-white/10 bg-bg-2 overflow-hidden block transition-all duration-300 ${world.border}`}
      >
        {/* Hover glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
          style={{ background: `radial-gradient(circle at 30% 30%, ${world.glow}, transparent 70%)` }} />
        {/* Top accent */}
        <div className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: `linear-gradient(90deg, transparent, ${world.accent}, transparent)` }} />

        <span className="text-3xl mb-4 relative z-10" style={{ transform: 'translateZ(20px)' }}>{world.icon}</span>
        <span className={`font-serif text-lg font-bold text-white mb-0.5 relative z-10 ${world.textAccent} group-hover:text-white transition-colors`}
          style={{ transform: 'translateZ(15px)' }}>
          {world.title}
        </span>
        <span className="text-[10px] font-mono tracking-widest mb-2 relative z-10"
          style={{ color: world.accent, transform: 'translateZ(12px)' }}>
          {world.subtitle}
        </span>
        <span className="text-[11px] text-text-muted leading-relaxed relative z-10" style={{ transform: 'translateZ(10px)' }}>
          {world.desc}
        </span>

        {/* Arrow */}
        <motion.span
          className="absolute bottom-4 right-4 font-mono text-[11px] opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ color: world.accent }}
        >
          enter →
        </motion.span>
      </Link>
    </motion.div>
  )
}

export default function HomePage() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden bg-grid-subtle">
      {/* Particle field */}
      {mounted && <ParticleField />}

      {/* Multi-world ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(155,109,255,0.05) 0%, transparent 60%)' }} />
        <div className="absolute bottom-0 right-0 w-96 h-96"
          style={{ background: 'radial-gradient(circle, rgba(245,200,66,0.04) 0%, transparent 60%)' }} />
        <div className="absolute top-0 left-0 w-96 h-96"
          style={{ background: 'radial-gradient(circle, rgba(56,217,245,0.04) 0%, transparent 60%)' }} />
      </div>

      {/* Status */}
      <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 border border-white/13 font-mono text-[11px] text-text-muted tracking-widest uppercase px-4 py-1.5 mb-10 z-10">
        <span className="w-1.5 h-1.5 rounded-full bg-research-green animate-pulse-slow" />
        aranyaghosh.org · v2.0 · live
      </motion.div>

      {/* Name */}
      <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="font-serif text-[clamp(4rem,14vw,10rem)] font-black leading-[0.88] tracking-tight text-white mb-4 z-10 relative">
        <em className="text-gradient-diary italic">Aranya</em>
        <br />
        <span className="text-white">Ghosh</span>
      </motion.h1>

      {/* Role */}
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.5 }}
        className="font-sans text-text-muted text-base font-light tracking-[0.15em] mb-2 z-10 uppercase">
        AI Researcher · Engineer · PhD Aspirant
      </motion.p>

      {/* GATE badge */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.5 }}
        className="flex items-center gap-2 font-mono text-[11px] tracking-wider mb-12 z-10">
        <span className="text-diary-gold font-bold">GATE 2026 AIR 3</span>
        <span className="text-white/20">·</span>
        <span className="text-text-muted">DS & AI</span>
        <span className="text-white/20">|</span>
        <span className="text-text-muted">MS-MITA @ Rutgers</span>
        <span className="text-white/20">|</span>
        <span className="text-research-green">Published Researcher</span>
      </motion.div>

      {/* World cards — 3D magnetic */}
      <div className="flex gap-3 flex-wrap justify-center mb-14 z-10" style={{ perspective: 1200 }}>
        {WORLDS.map((w, i) => <WorldCard key={w.href} world={w} index={i} />)}
      </div>

      {/* Stats strip */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="flex gap-px bg-white/7 border border-white/7 z-10">
        {STATS.map((s) => (
          <div key={s.label} className="bg-bg-2 px-6 py-3 text-center">
            <div className="font-serif text-xl font-black text-white">{s.value}</div>
            <div className="font-mono text-[9px] text-text-muted tracking-widest uppercase mt-0.5">{s.label}</div>
          </div>
        ))}
      </motion.div>
    </main>
  )
}
