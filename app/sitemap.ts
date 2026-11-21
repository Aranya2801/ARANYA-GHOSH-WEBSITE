import type { MetadataRoute } from 'next'
import { getEntries } from '@/lib/content'
import { SITE } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', '/diary', '/professional', '/research', '/blog'].map((p) => ({ url: `${SITE.url}${p}`, changeFrequency: 'weekly' as const, priority: p === '' ? 1 : 0.8 }))
  const entries = (['blog', 'diary'] as const).flatMap((k) =>
    getEntries(k).map((e) => ({ url: `${SITE.url}/${k}/${e.slug}`, lastModified: new Date(e.date), priority: 0.6 }))
  )
  return [...pages, ...entries]
}
