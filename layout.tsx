import type { Metadata, Viewport } from 'next'
import { Playfair_Display, DM_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap' })
const dmSans   = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans', display: 'swap' })
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains', display: 'swap' })

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://aranyaghosh.org'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Aranya Ghosh — AI Researcher & Engineer',
    template: '%s | Aranya Ghosh',
  },
  description:
    'GATE 2026 AIR 3 (DS & AI) | MS-MITA @ Rutgers Business School | ML/AI Researcher | IIT-KGP & IIIT-N Intern | Published Author | PhD Aspirant in AI/ML',
  keywords: [
    'Aranya Ghosh', 'GATE AIR 3', 'AI researcher', 'machine learning',
    'Rutgers', 'deep learning', 'PhD aspirant', 'data science',
    'computer vision', 'NLP', 'IIT Kharagpur', 'IIIT Nagpur',
  ],
  authors: [{ name: 'Aranya Ghosh', url: BASE_URL }],
  creator: 'Aranya Ghosh',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'Aranya Ghosh',
    title: 'Aranya Ghosh — AI Researcher & Engineer',
    description: 'GATE 2026 AIR 3 · MS-MITA @ Rutgers · Published ML Researcher · PhD Aspirant',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Aranya Ghosh' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aranya Ghosh — AI Researcher',
    description: 'GATE 2026 AIR 3 · MS @ Rutgers · Published ML Researcher',
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export const viewport: Viewport = {
  themeColor: '#06060a',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} ${jetbrains.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-bg text-text-DEFAULT antialiased">
        {/* Atmospheric effects */}
        <div className="noise-overlay" aria-hidden="true" />
        <div className="scanline" aria-hidden="true" />
        {children}
      </body>
    </html>
  )
}
