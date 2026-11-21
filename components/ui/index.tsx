import { cn } from '@/lib/utils'

export type Accent = 'gold' | 'cyan' | 'violet' | 'green'

/** Full class names so Tailwind can see them. One accent per "world". */
export const ACCENT: Record<
  Accent,
  { text: string; label: string; border: string; hoverBorderL: string; hoverBorderT: string; hoverText: string; soft: string; gradient: string; glow: string; tagHover: string; badge: string }
> = {
  gold: {
    text: 'text-diary-gold',
    label: 'text-diary-amber',
    border: 'border-diary-gold',
    hoverBorderL: 'hover:border-l-diary-gold',
    hoverBorderT: 'hover:border-t-diary-gold',
    hoverText: 'group-hover:text-diary-gold',
    soft: 'bg-diary-gold/10',
    gradient: 'text-gradient-diary',
    glow: 'rgb(var(--gold) / 0.08)',
    tagHover: 'hover:border-diary-gold hover:text-diary-gold',
    badge: 'border-diary-gold/60 bg-diary-gold/10 text-diary-gold',
  },
  cyan: {
    text: 'text-pro-cyan',
    label: 'text-pro-cyan',
    border: 'border-pro-cyan',
    hoverBorderL: 'hover:border-l-pro-cyan',
    hoverBorderT: 'hover:border-t-pro-cyan',
    hoverText: 'group-hover:text-pro-cyan',
    soft: 'bg-pro-cyan/10',
    gradient: 'text-gradient-pro',
    glow: 'rgb(var(--cyan) / 0.08)',
    tagHover: 'hover:border-pro-cyan hover:text-pro-cyan',
    badge: 'border-pro-cyan/60 bg-pro-cyan/10 text-pro-cyan',
  },
  violet: {
    text: 'text-research-violet',
    label: 'text-research-violet',
    border: 'border-research-violet',
    hoverBorderL: 'hover:border-l-research-violet',
    hoverBorderT: 'hover:border-t-research-violet',
    hoverText: 'group-hover:text-research-violet',
    soft: 'bg-research-violet/10',
    gradient: 'text-gradient-research',
    glow: 'rgb(var(--violet) / 0.09)',
    tagHover: 'hover:border-research-violet hover:text-research-violet',
    badge: 'border-research-violet/60 bg-research-violet/10 text-research-violet',
  },
  green: {
    text: 'text-research-green',
    label: 'text-research-green',
    border: 'border-research-green',
    hoverBorderL: 'hover:border-l-research-green',
    hoverBorderT: 'hover:border-t-research-green',
    hoverText: 'group-hover:text-research-green',
    soft: 'bg-research-green/10',
    gradient: 'text-gradient-research',
    glow: 'rgb(var(--green) / 0.07)',
    tagHover: 'hover:border-research-green hover:text-research-green',
    badge: 'border-research-green/60 bg-research-green/10 text-research-green',
  },
}

export function SectionLabel({ children, accent = 'green' }: { children: React.ReactNode; accent?: Accent }) {
  return <div className={cn('section-label', ACCENT[accent].label)}>{'// '}{children}</div>
}

export function SectionHeading({ children, className }: { children: React.ReactNode; className?: string }) {
  return <h2 className={cn('mb-6 font-serif text-2xl font-black text-strong md:text-3xl', className)}>{children}</h2>
}

/** Page header with an ambient glow. */
export function PageHero({
  accent,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  accent: Accent
  eyebrow?: string
  title: React.ReactNode
  subtitle?: string
  children?: React.ReactNode
}) {
  return (
    <header className="relative overflow-hidden border-b border-line/10 px-6 py-20 md:px-12">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-20 h-[520px] w-[520px] rounded-full"
        style={{ background: `radial-gradient(circle, ${ACCENT[accent].glow} 0%, transparent 70%)` }}
      />
      <div className="relative">
        {eyebrow && <p className="mb-2 font-mono text-[11px] uppercase tracking-widest text-muted">{eyebrow}</p>}
        <h1 className="mb-3 font-serif text-[clamp(2.5rem,7vw,5.5rem)] font-black leading-[0.95] text-strong">{title}</h1>
        {subtitle && <p className="max-w-2xl font-mono text-xs tracking-wide text-muted">{subtitle}</p>}
        {children}
      </div>
    </header>
  )
}

/** Hairline-gridded container: children should use `Cell` (or set their own bg-bg-2). */
export function Panel({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn('grid gap-px border border-line/10 bg-line/10', className)}>{children}</div>
}

export function Cell({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn('bg-bg-2 p-5 transition-colors hover:bg-bg-3', className)}>{children}</div>
}

export function Tag({ children, accent }: { children: React.ReactNode; accent?: Accent }) {
  return (
    <span
      className={cn(
        'inline-block border border-line/15 px-2 py-0.5 font-mono text-[10px] text-muted transition-colors',
        accent ? ACCENT[accent].tagHover : 'hover:border-line/30 hover:text-strong'
      )}
    >
      {children}
    </span>
  )
}

export function Badge({ children, accent }: { children: React.ReactNode; accent: Accent }) {
  return (
    <span className={cn('inline-block border px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest', ACCENT[accent].badge)}>
      {children}
    </span>
  )
}

export function EmptyState({ children }: { children: React.ReactNode }) {
  return (
    <div className="border border-dashed border-line/20 bg-bg-2 p-8 text-center font-mono text-xs leading-relaxed text-muted">
      {children}
    </div>
  )
}
