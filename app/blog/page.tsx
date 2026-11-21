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
      <PageHero accent="green" eyebrow="// blog" title={<>Notes &amp; <span className="text-gradient-research italic">write-ups</span></>} subtitle="Subscribe via RSS at /feed.xml" />
      <div className="mx-auto max-w-4xl px-6 py-16">
        <EntryList
          entries={entries}
          accent="green"
          emptyMessage={<>No posts yet. Add a Markdown file to <code>content/blog/</code> (or run <code>npm run new:post</code>).</>}
        />
      </div>
    </>
  )
}
