import type { Metadata } from 'next'
import EntryList from '@/components/EntryList'
import { PageHero } from '@/components/ui'
import { getSummaries } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Technical notes and write-ups by Aranya Ghosh.',
}

export default function BlogPage() {
  const entries = getSummaries('blog')
  return (
    <>
      <PageHero accent="green" eyebrow="blog" title={<>Notes &amp; <span className="text-gradient-research italic">write-ups</span></>} subtitle="Things I am learning, written down." />
      <div className="mx-auto max-w-4xl px-6 py-16">
        <EntryList
          entries={entries}
          accent="green"
          emptyMessage={<>Nothing here yet.</>}
        />
      </div>
    </>
  )
}
