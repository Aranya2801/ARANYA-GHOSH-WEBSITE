import Link from 'next/link'
export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-grid-subtle">
      <div className="font-mono text-[10px] text-research-green tracking-widest uppercase mb-4 border border-research-green/40 px-3 py-1">
        404 — not found
      </div>
      <h1 className="font-serif text-7xl font-black text-white mb-4">¯\_(ツ)_/¯</h1>
      <p className="text-text-muted text-sm mb-8 max-w-sm">
        This page doesn't exist. Maybe it's still being trained on the data.
      </p>
      <Link href="/" className="font-mono text-xs text-research-green border border-research-green/40 px-6 py-3 hover:bg-research-green/10 transition-colors tracking-widest uppercase">
        ← back to home
      </Link>
    </div>
  )
}
