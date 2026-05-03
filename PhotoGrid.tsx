'use client'
import { useState, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface Slot { id: string; url: string | null; label: string; span?: string }

const INITIAL_SLOTS: Slot[] = [
  { id: 'cover', url: null, label: 'cover photo', span: 'col-span-2' },
  { id: 'p1', url: null, label: 'add photo' },
  { id: 'p2', url: null, label: 'add photo' },
  { id: 'p3', url: null, label: 'add photo' },
  { id: 'p4', url: null, label: 'add photo' },
  { id: 'p5', url: null, label: 'add photo' },
  { id: 'p6', url: null, label: 'add photo' },
]

export default function PhotoGrid() {
  const [slots, setSlots] = useState<Slot[]>(INITIAL_SLOTS)

  function handleFile(id: string, file: File) {
    const url = URL.createObjectURL(file)
    setSlots(prev => prev.map(s => s.id === id ? { ...s, url } : s))
  }

  return (
    <div className="grid grid-cols-3 gap-px bg-white/7 border border-white/7 mb-2">
      {slots.map(slot => (
        <PhotoSlot key={slot.id} slot={slot} onFile={(f) => handleFile(slot.id, f)} />
      ))}
    </div>
  )
}

function PhotoSlot({ slot, onFile }: { slot: Slot; onFile: (f: File) => void }) {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <motion.div
      whileHover={{ scale: slot.url ? 1.01 : 1 }}
      onClick={() => !slot.url && inputRef.current?.click()}
      className={`
        relative bg-bg-3 border-0 overflow-hidden cursor-pointer
        ${slot.span ?? ''} aspect-square
        ${!slot.url ? 'hover:bg-bg-surface group' : ''}
      `}
      style={slot.id === 'cover' ? { aspectRatio: '2/1' } : {}}
    >
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={e => e.target.files?.[0] && onFile(e.target.files[0])}
      />

      {slot.url ? (
        <>
          <Image src={slot.url} alt={slot.label} fill className="object-cover" unoptimized />
          <div
            className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity
                       flex items-center justify-center cursor-pointer"
            onClick={(e) => { e.stopPropagation(); inputRef.current?.click() }}
          >
            <span className="font-mono text-[11px] text-diary-gold tracking-widest">change ↑</span>
          </div>
        </>
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-1
                        border border-dashed border-white/13 group-hover:border-diary-gold/50 transition-colors">
          <span className="text-xl opacity-40 group-hover:opacity-70 transition-opacity">📷</span>
          <span className="font-mono text-[10px] text-text-muted group-hover:text-diary-gold/70 transition-colors tracking-widest">
            {slot.label}
          </span>
        </div>
      )}
    </motion.div>
  )
}
