import Link from 'next/link'
import { NAV, SITE } from '@/lib/site'

export default function SiteFooter() {
  return (
    <footer className="no-print border-t border-line/10 px-6 py-10 md:px-12">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-serif text-lg italic text-strong">{SITE.name}</p>
          <p className="mt-1 font-mono text-[11px] text-muted">{SITE.tagline}</p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-widest text-muted">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="transition-colors hover:text-strong">
              {n.label}
            </Link>
          ))}
          <a href="/feed.xml" className="transition-colors hover:text-strong">
            RSS
          </a>
          <a href={SITE.githubUrl} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-strong">
            GitHub
          </a>
          <a href={SITE.linkedinUrl} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-strong">
            LinkedIn
          </a>
        </nav>
      </div>
      <p className="mt-8 font-mono text-[10px] text-muted">
        © {new Date().getFullYear()} {SITE.name} · Press <kbd className="border border-line/20 px-1">Ctrl</kbd>/<kbd className="border border-line/20 px-1">⌘</kbd> K to search
      </p>
    </footer>
  )
}
