'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')

  function update(field: string, value: string) {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('API error')
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const inputClass = `
    w-full bg-bg-3 border border-white/13 text-text-DEFAULT
    font-mono text-sm px-4 py-3
    placeholder:text-text-muted
    focus:outline-none focus:border-pro-cyan/60
    transition-colors duration-200
  `

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <input
          className={inputClass}
          placeholder="Your name"
          value={form.name}
          onChange={e => update('name', e.target.value)}
          required
        />
        <input
          className={inputClass}
          type="email"
          placeholder="Email address"
          value={form.email}
          onChange={e => update('email', e.target.value)}
          required
        />
      </div>
      <input
        className={inputClass}
        placeholder="Subject"
        value={form.subject}
        onChange={e => update('subject', e.target.value)}
      />
      <textarea
        className={`${inputClass} resize-none`}
        rows={5}
        placeholder="Your message..."
        value={form.message}
        onChange={e => update('message', e.target.value)}
        required
      />

      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="inline-flex items-center gap-2 font-mono text-[12px] tracking-widest
                     border border-pro-cyan text-pro-cyan bg-pro-cyan/7
                     px-6 py-3 hover:bg-pro-cyan/15 transition-colors
                     disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Send size={13} />
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>

        <AnimatePresence mode="wait">
          {status === 'success' && (
            <motion.div
              key="success"
              initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }}
              className="flex items-center gap-1.5 font-mono text-[11px] text-research-green"
            >
              <CheckCircle size={13} /> Message sent!
            </motion.div>
          )}
          {status === 'error' && (
            <motion.div
              key="error"
              initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }}
              className="flex items-center gap-1.5 font-mono text-[11px] text-red-400"
            >
              <AlertCircle size={13} /> Something went wrong. Try again.
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </form>
  )
}
