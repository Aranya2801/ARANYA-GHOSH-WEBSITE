'use client'
import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface GalleryPhoto {
  src: string
  caption: string
  category: string
}

const label = (c: string) => c.charAt(0).toUpperCase() + c.slice(1)

export default function Gallery({ photos, categories }: { photos: GalleryPhoto[]; categories: string[] }) {
  const [cat, setCat] = useState<string>('all')
  const [index, setIndex] = useState<number | null>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  const shown = cat === 'all' ? photos : photos.filter((p) => p.category === cat)

  const step = useCallback(
    (d: number) => setIndex((i) => (i === null ? i : (i + d + shown.length) % shown.length)),
    [shown.length]
  )

  useEffect(() => {
    if (index === null) return
    closeRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIndex(null)
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [index, step])

  const current = index !== null ? shown[index] : null

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-2" role="group" aria-label="Filter photos">
        {['all', ...categories].map((c) => (
          <button
            key={c}
            type="button"
            aria-pressed={cat === c}
            onClick={() => setCat(c)}
            className={cn(
              'border px-3 py-1 font-mono text-[10px] uppercase tracking-widest transition-colors',
              cat === c ? 'border-diary-gold bg-diary-gold/10 text-diary-gold' : 'border-line/20 text-muted hover:text-strong'
            )}
          >
            {label(c)}
          </button>
        ))}
      </div>

      <ul className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
        {shown.map((p, i) => (
          <li key={p.src}>
            <button
              type="button"
              onClick={() => setIndex(i)}
              className="group relative block aspect-square w-full overflow-hidden border border-line/10 bg-bg-2"
              aria-label={`Open photo: ${p.caption}`}
            >
              <Image
                src={p.src}
                alt={p.caption}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-left font-mono text-[10px] text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                {p.caption}
              </span>
            </button>
          </li>
        ))}
      </ul>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.caption}
          className="fixed inset-0 z-[85] flex items-center justify-center bg-black/90 p-4"
          onMouseDown={(e) => e.target === e.currentTarget && setIndex(null)}
        >
          <button ref={closeRef} type="button" onClick={() => setIndex(null)} aria-label="Close" className="absolute right-4 top-4 p-2 text-white/80 hover:text-white">
            <X size={22} />
          </button>
          {shown.length > 1 && (
            <>
              <button type="button" onClick={() => step(-1)} aria-label="Previous photo" className="absolute left-2 p-3 text-white/80 hover:text-white md:left-6">
                <ChevronLeft size={28} />
              </button>
              <button type="button" onClick={() => step(1)} aria-label="Next photo" className="absolute right-2 p-3 text-white/80 hover:text-white md:right-6">
                <ChevronRight size={28} />
              </button>
            </>
          )}
          <figure className="relative h-[80vh] w-full max-w-5xl">
            <Image src={current.src} alt={current.caption} fill sizes="100vw" className="object-contain" priority />
            <figcaption className="absolute inset-x-0 -bottom-9 text-center font-mono text-xs text-white/80">
              {current.caption} · {(index ?? 0) + 1}/{shown.length}
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  )
}
