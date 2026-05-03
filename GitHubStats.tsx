'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface GitHubStats {
  followers: number
  public_repos: number
  total_stars: number
  bio: string | null
  location: string | null
}

export default function GitHubStats() {
  const [stats, setStats] = useState<GitHubStats | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/github')
      .then(r => r.json())
      .then(d => { setStats(d); setLoading(false) })
      .catch(() => setLoading(false))
  }, [])

  const items = stats
    ? [
        { label: 'Repositories', value: stats.public_repos },
        { label: 'Followers',    value: stats.followers },
        { label: 'Total Stars',  value: stats.total_stars },
      ]
    : [
        { label: 'Repositories', value: '—' },
        { label: 'Followers',    value: '—' },
        { label: 'Total Stars',  value: '—' },
      ]

  return (
    <div className="flex gap-px bg-white/7 border border-white/7">
      {items.map((item, i) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="bg-bg-2 flex-1 py-4 px-4 text-center"
        >
          <div className="font-serif text-2xl font-black text-pro-cyan">
            {loading ? (
              <span className="inline-block w-8 h-7 bg-white/10 animate-pulse rounded" />
            ) : (
              item.value
            )}
          </div>
          <div className="font-mono text-[10px] text-text-muted tracking-widest mt-0.5 uppercase">
            {item.label}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
