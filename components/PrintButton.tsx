'use client'
import { Printer } from 'lucide-react'

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="no-print inline-flex items-center gap-2 border border-pro-cyan px-4 py-2 font-mono text-[11px] uppercase tracking-widest text-pro-cyan transition-colors hover:bg-pro-cyan/10"
    >
      <Printer size={13} aria-hidden /> Print / save as PDF
    </button>
  )
}
