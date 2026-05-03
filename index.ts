export type World = 'diary' | 'professional' | 'research'

export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  num: string
  badge?: string
  github?: string
  demo?: string
}

export interface ResearchWork {
  id: string
  type: 'published' | 'conference' | 'award'
  title: string
  institution: string
  period: string
  description: string
  tools: string[]
  badge: string
}

export interface VlogEntry {
  id: string
  date: string
  title: string
  body?: string
}

export interface FavSong {
  num: string
  title: string
  artist: string
}

export interface FavMovie {
  rank: string
  title: string
  genre: string
  year?: string
}

export interface LifeChapter {
  year: string
  era: string
  title: string
  body: string
}
