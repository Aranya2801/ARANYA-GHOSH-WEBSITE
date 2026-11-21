import 'server-only'
import fs from 'node:fs'
import path from 'node:path'

export interface Photo {
  src: string
  caption: string
  category: string
}

const ROOT = path.join(process.cwd(), 'public', 'photos')
const IMAGE = /\.(jpe?g|png|webp|avif)$/i
const CATEGORY_ORDER = ['school', 'college', 'life']

const title = (s: string) => s.replace(/[-_]+/g, ' ').replace(/\s+/g, ' ').trim().replace(/^./, (c) => c.toUpperCase())

/**
 * Photos are plain files: drop images into public/photos/<category>/ and they appear
 * on /diary after the next deploy. Optional captions live in public/photos/captions.json
 * as { "school/farewell-day.jpg": "Last day of Class 12" }.
 */
export function getPhotos(): { photos: Photo[]; categories: string[] } {
  if (!fs.existsSync(ROOT)) return { photos: [], categories: [] }

  let captions: Record<string, string> = {}
  const captionFile = path.join(ROOT, 'captions.json')
  if (fs.existsSync(captionFile)) {
    try {
      captions = JSON.parse(fs.readFileSync(captionFile, 'utf8'))
    } catch {
      console.warn('public/photos/captions.json is not valid JSON — ignoring it')
    }
  }

  const photos: Photo[] = []
  for (const dir of fs.readdirSync(ROOT, { withFileTypes: true })) {
    if (!dir.isDirectory()) continue
    for (const file of fs.readdirSync(path.join(ROOT, dir.name)).sort()) {
      if (!IMAGE.test(file)) continue
      const key = `${dir.name}/${file}`
      photos.push({
        src: `/photos/${encodeURIComponent(dir.name)}/${encodeURIComponent(file)}`,
        caption: captions[key] ?? title(file.replace(IMAGE, '')),
        category: title(dir.name),
      })
    }
  }

  const rank = (c: string) => {
    const i = CATEGORY_ORDER.indexOf(c.toLowerCase())
    return i === -1 ? CATEGORY_ORDER.length : i
  }
  const categories = [...new Set(photos.map((p) => p.category))].sort((a, b) => rank(a) - rank(b) || a.localeCompare(b))
  return { photos, categories }
}
