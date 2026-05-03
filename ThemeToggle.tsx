'use client'
import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ThemeToggle() {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'light') {
      setDark(false)
      document.documentElement.classList.remove('dark')
    } else {
      document.documentElement.classList.add('dark')
    }
  }, [])

  function toggle() {
    const next = !dark
    setDark(next)
    if (next) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <motion.button
      onClick={toggle}
      whileTap={{ scale: 0.9 }}
      className="flex items-center justify-center w-8 h-8 border border-white/13
                 text-text-muted hover:text-white hover:border-white/30
                 transition-colors duration-200"
      aria-label="Toggle theme"
    >
      {dark ? <Sun size={13} /> : <Moon size={13} />}
    </motion.button>
  )
}
