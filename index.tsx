'use client'
import { cn } from '@/lib/utils'

/* ── Section Label ── */
interface SectionLabelProps {
  children: React.ReactNode
  color?: 'diary' | 'pro' | 'research'
  className?: string
}
export function SectionLabel({ children, color = 'diary', className }: SectionLabelProps) {
  const colors = {
    diary:    'text-diary-amber',
    pro:      'text-pro-cyan',
    research: 'text-research-violet',
  }
  return (
    <div className={cn('section-label', colors[color], className)}>
      <span>// {children}</span>
    </div>
  )
}

/* ── Section Heading ── */
interface HeadingProps {
  children: React.ReactNode
  className?: string
}
export function SectionHeading({ children, className }: HeadingProps) {
  return (
    <h3 className={cn('font-serif text-2xl md:text-3xl font-black text-white mb-6', className)}>
      {children}
    </h3>
  )
}

/* ── Tag chip ── */
interface TagProps {
  children: React.ReactNode
  active?: boolean
  color?: 'diary' | 'pro' | 'research' | 'default'
}
export function Tag({ children, color = 'default' }: TagProps) {
  const styles = {
    default:  'border-white/10 text-text-muted hover:border-white/25 hover:text-white',
    diary:    'border-white/10 text-text-muted hover:border-diary-gold hover:text-diary-gold',
    pro:      'border-white/10 text-text-muted hover:border-pro-cyan hover:text-pro-cyan',
    research: 'border-white/10 text-text-muted hover:border-research-violet hover:text-research-violet',
  }
  return (
    <span className={cn(
      'inline-block border text-[10px] px-2 py-0.5 font-mono transition-colors duration-150',
      styles[color]
    )}>
      {children}
    </span>
  )
}

/* ── Research badge ── */
interface BadgeProps {
  type: 'published' | 'conference' | 'award'
  children: React.ReactNode
}
export function ResearchBadge({ type, children }: BadgeProps) {
  const styles = {
    published:  'bg-research-green/10 text-research-green border-research-green/60',
    conference: 'bg-research-violet/10 text-research-lavender border-research-violet/60',
    award:      'bg-diary-gold/10 text-diary-gold border-diary-gold/60',
  }
  return (
    <span className={cn(
      'inline-block border font-mono text-[10px] px-2.5 py-1 mb-3 tracking-widest uppercase',
      styles[type]
    )}>
      {children}
    </span>
  )
}

/* ── Pulse dot ── */
export function PulseDot({ color = 'green' }: { color?: 'green' | 'amber' | 'violet' }) {
  const colors = {
    green:  'bg-research-green',
    amber:  'bg-diary-gold',
    violet: 'bg-research-violet',
  }
  return (
    <span className={cn(
      'inline-block w-1.5 h-1.5 rounded-full mr-2',
      colors[color],
      'animate-pulse-slow'
    )} />
  )
}

/* ── Divider line ── */
export function Divider() {
  return <div className="border-t border-white/7 my-8" />
}
