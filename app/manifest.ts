import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/site'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: 'Aranya',
    description: SITE.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#05070d',
    theme_color: '#05070d',
    icons: [{ src: '/icon', sizes: '32x32', type: 'image/png' }],
  }
}
