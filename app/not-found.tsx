import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-xl flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-[11px] uppercase tracking-widest text-muted">404</p>
      <h1 className="mt-2 font-serif text-5xl font-black text-strong">Page not found</h1>
      <p className="mt-4 text-sm text-muted">That page doesn&apos;t exist (or has moved). Try the search with Ctrl/⌘ K, or head home.</p>
      <Link href="/" className="mt-8 border border-line/30 px-5 py-2 font-mono text-xs uppercase tracking-widest text-strong hover:bg-line/10">
        Back to home
      </Link>
    </div>
  )
}
