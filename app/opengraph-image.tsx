import { ImageResponse } from 'next/og'
import { SITE } from '@/lib/site'

export const alt = SITE.name
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OG() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 80, background: '#05070d', color: '#e8ecf4' }}>
        <div style={{ fontSize: 26, color: '#38d9f5', letterSpacing: 4, textTransform: 'uppercase' }}>{SITE.tagline}</div>
        <div style={{ fontSize: 120, fontWeight: 800, marginTop: 20, lineHeight: 1 }}>{SITE.name}</div>
        <div style={{ fontSize: 30, marginTop: 30, color: '#8a93a8', maxWidth: 900 }}>GATE 2026 AIR 3 · MS-MITA at Rutgers · ML research</div>
        <div style={{ fontSize: 24, marginTop: 50, color: '#f5c842' }}>aranyaghosh.org</div>
      </div>
    ),
    size
  )
}
