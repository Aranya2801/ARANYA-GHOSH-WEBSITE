import type { Metadata, Viewport } from 'next'
import '@fontsource-variable/playfair-display'
import '@fontsource-variable/playfair-display/wght-italic.css'
import '@fontsource-variable/dm-sans'
import '@fontsource-variable/jetbrains-mono'
import './globals.css'
import Navbar from '@/components/Navbar'
import CommandPalette from '@/components/CommandPalette'
import SiteFooter from '@/components/SiteFooter'
import { MotionProvider } from '@/components/ui/motion'
import { getLatest } from '@/lib/content'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: `${SITE.name} — ${SITE.tagline}`, template: `%s · ${SITE.name}` },
  description: SITE.description,
  authors: [{ name: SITE.name, url: SITE.url }],
  alternates: { types: { 'application/rss+xml': '/feed.xml' } },
  openGraph: { type: 'website', siteName: SITE.name, title: SITE.name, description: SITE.description, url: SITE.url },
  twitter: { card: 'summary_large_image', title: SITE.name, description: SITE.description },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#05070d' },
    { media: '(prefers-color-scheme: light)', color: '#f7f5ef' },
  ],
}

// Runs before first paint so there is no theme flash. Dark is the default.
const THEME_SCRIPT = `try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'}document.documentElement.dataset.theme=t}catch(e){document.documentElement.dataset.theme='dark'}`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const palette = getLatest(8).map((e) => ({ title: e.title, href: `/${e.kind}/${e.slug}`, kind: e.kind }))
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: SITE.name,
    url: SITE.url,
    email: `mailto:${SITE.email}`,
    sameAs: [SITE.githubUrl, SITE.linkedinUrl],
    jobTitle: 'AI/ML researcher and engineer',
  }

  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
        <noscript>
          <style>{`[style*="opacity:0"]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="min-h-screen bg-bg font-sans text-ink antialiased">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-bg-2 focus:px-4 focus:py-2 focus:text-strong">
          Skip to content
        </a>
        <div className="noise-overlay" aria-hidden />
        <MotionProvider>
          <Navbar />
          <CommandPalette entries={palette} />
          <main id="main" className="pt-16">
            {children}
          </main>
          <SiteFooter />
        </MotionProvider>
      </body>
    </html>
  )
}
