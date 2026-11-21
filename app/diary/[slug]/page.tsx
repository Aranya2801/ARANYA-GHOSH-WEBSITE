import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import EntryPage from '@/components/EntryPage'
import { getEntries, getEntry } from '@/lib/content'

export const dynamicParams = false

export function generateStaticParams() {
  return getEntries('diary').map((e) => ({ slug: e.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const e = getEntry('diary', params.slug)
  if (!e) return {}
  return {
    title: e.title,
    description: e.excerpt,
    alternates: { canonical: `/diary/${e.slug}` },
    openGraph: { type: 'article', title: e.title, description: e.excerpt, publishedTime: e.date, tags: e.tags },
  }
}

export default function Page({ params }: { params: { slug: string } }) {
  const entry = getEntry('diary', params.slug)
  if (!entry) notFound()
  return <EntryPage entry={entry} accent="gold" backHref="/diary" backLabel="Back to diary" />
}
