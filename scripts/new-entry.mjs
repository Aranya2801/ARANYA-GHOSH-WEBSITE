#!/usr/bin/env node
// Usage: npm run new:post -- "My title"   |   npm run new:diary -- "My title"
import fs from 'node:fs'
import path from 'node:path'

const [, , kind, ...rest] = process.argv
if (!['blog', 'diary'].includes(kind)) {
  console.error('Usage: node scripts/new-entry.mjs <blog|diary> "Title"')
  process.exit(1)
}
const title = rest.join(' ').trim() || 'Untitled'
const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'untitled'
const date = new Date().toISOString().slice(0, 10)
const dir = path.join(process.cwd(), 'content', kind)
fs.mkdirSync(dir, { recursive: true })
const file = path.join(dir, `${slug}.md`)
if (fs.existsSync(file)) {
  console.error(`Already exists: ${path.relative(process.cwd(), file)}`)
  process.exit(1)
}
const extra = kind === 'diary' ? 'mood: ""\n' : ''
fs.writeFileSync(file, `---\ntitle: "${title.replace(/"/g, '\\"')}"\ndate: ${date}\ntags: []\n${extra}draft: true\n---\n\nWrite here.\n`)
console.log(`Created ${path.relative(process.cwd(), file)} (draft: true — remove that line to publish)`)
