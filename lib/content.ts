import 'server-only'
import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import { z } from 'zod'

export type Kind = 'blog' | 'diary'

export interface Entry {
  kind: Kind
  slug: string
  title: string
  date: string // ISO
  excerpt: string
  tags: string[]
  featured: boolean
  mood?: string
  youtube?: string
  readTime: number
  body: string
}

/** What client components receive — no body, so pages stay light. */
export type EntrySummary = Omit<Entry, 'body'>

const Frontmatter = z.object({
  title: z.string().min(1),
  date: z.coerce.date(),
  excerpt: z.string().optional(),
  tags: z.array(z.string()).default([]),
  featured: z.boolean().default(false),
  draft: z.boolean().default(false),
  mood: z.string().optional(),
  youtube: z
    .string()
    .regex(/^[\w-]{11}$/, 'youtube must be an 11-character video id')
    .optional(),
})

const ROOT = path.join(process.cwd(), 'content')

function plainExcerpt(body: string) {
  const first = body
    .split(/\n{2,}/)
    .map((p) => p.trim())
    .find((p) => p && !p.startsWith('#') && !p.startsWith('!') && !p.startsWith('```'))
  const text = (first ?? '').replace(/[*_`>#]|\[([^\]]*)\]\([^)]*\)/g, '$1').replace(/\s+/g, ' ')
  return text.length > 180 ? `${text.slice(0, 177).trimEnd()}…` : text
}

function load(kind: Kind): Entry[] {
  const dir = path.join(ROOT, kind)
  if (!fs.existsSync(dir)) return []

  const entries: Entry[] = []
  for (const file of fs.readdirSync(dir)) {
    // `_template.md` and friends are ignored
    if (!file.endsWith('.md') || file.startsWith('_')) continue

    const { data, content } = matter(fs.readFileSync(path.join(dir, file), 'utf8'))
    const parsed = Frontmatter.safeParse(data)
    if (!parsed.success) {
      const why = parsed.error.issues.map((i) => `${i.path.join('.') || 'frontmatter'}: ${i.message}`).join('; ')
      throw new Error(`Invalid frontmatter in content/${kind}/${file} — ${why}`)
    }
    const fm = parsed.data
    // Drafts only show up while running `npm run dev`
    if (fm.draft && process.env.NODE_ENV === 'production') continue

    const body = content.trim()
    const words = body.split(/\s+/).filter(Boolean).length
    entries.push({
      kind,
      slug: file.replace(/\.md$/, ''),
      title: fm.title,
      date: fm.date.toISOString(),
      excerpt: fm.excerpt ?? plainExcerpt(body),
      tags: fm.tags,
      featured: fm.featured,
      mood: fm.mood,
      youtube: fm.youtube,
      readTime: Math.max(1, Math.round(words / 220)),
      body,
    })
  }
  return entries.sort((a, b) => b.date.localeCompare(a.date))
}

export function getEntries(kind: Kind): Entry[] {
  return load(kind)
}

export function getSummaries(kind: Kind): EntrySummary[] {
  return load(kind).map(({ body: _body, ...rest }) => rest)
}

export function getEntry(kind: Kind, slug: string): Entry | undefined {
  return load(kind).find((e) => e.slug === slug)
}

/** Newest first across both collections — used by the home page and ⌘K palette. */
export function getLatest(limit = 4): EntrySummary[] {
  return [...getSummaries('blog'), ...getSummaries('diary')]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, limit)
}

export function hrefFor(e: Pick<Entry, 'kind' | 'slug'>) {
  return `/${e.kind}/${e.slug}`
}
