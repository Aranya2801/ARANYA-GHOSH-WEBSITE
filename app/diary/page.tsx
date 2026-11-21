import type { Metadata } from 'next'
import EntryList from '@/components/EntryList'
import Gallery from '@/components/Gallery'
import { PageHero, SectionLabel, Panel, Cell, EmptyState } from '@/components/ui'
import { FadeUp } from '@/components/ui/motion'
import { CHAPTERS, HOBBIES, FAV_MOVIES, FAV_SONGS } from '@/lib/data'
import { getSummaries } from '@/lib/content'
import { getPhotos } from '@/lib/photos'

export const metadata: Metadata = {
  title: 'Diary',
  description: 'Life chapters, photos, hobbies and journal entries from Aranya Ghosh.',
}

export default function DiaryPage() {
  const entries = getSummaries('diary')
  const { photos, categories } = getPhotos()

  return (
    <>
      <PageHero accent="gold" eyebrow="diary" title={<>The <span className="text-gradient-diary italic">diary</span></>} subtitle="School, college, photos and whatever else." />

      <div className="mx-auto max-w-6xl space-y-20 px-6 py-16 md:px-12">
        <section>
          <SectionLabel accent="gold">journal</SectionLabel>
          
          <EntryList
            entries={entries}
            accent="gold"
            emptyMessage={<>Nothing here yet.</>}
          />
        </section>

        <section>
          <SectionLabel accent="gold">life chapters</SectionLabel>
          <ol className="relative border-l border-line/20 pl-6">
            {CHAPTERS.map((c, i) => (
              <li key={c.year} className="relative pb-10 last:pb-0">
                <span aria-hidden className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 bg-diary-gold" />
                <FadeUp delay={i * 0.03}>
                  <div className="font-mono text-[11px] uppercase tracking-widest text-diary-amber">
                    {c.year} · {c.era}
                  </div>
                  <h3 className="mt-1 font-serif text-xl font-bold text-strong">{c.title}</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">{c.body}</p>
                </FadeUp>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <SectionLabel accent="gold">photos</SectionLabel>
          {photos.length > 0 ? (
            <Gallery photos={photos} categories={categories} />
          ) : (
            <EmptyState>
              Photos coming soon.
            </EmptyState>
          )}
        </section>

        <section>
          <SectionLabel accent="gold">hobbies</SectionLabel>
          <Panel className="md:grid-cols-3">
            {HOBBIES.map((h) => (
              <Cell key={h.title}>
                <h3 className="font-serif text-lg font-bold text-strong">{h.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{h.body}</p>
              </Cell>
            ))}
          </Panel>
        </section>

        {(FAV_SONGS.length > 0 || FAV_MOVIES.length > 0) && (
          <section>
            <SectionLabel accent="gold">favourites</SectionLabel>
            <div className="grid gap-8 md:grid-cols-2">
              {FAV_SONGS.length > 0 && (
                <div>
                  <h3 className="mb-3 font-serif text-lg font-bold text-strong">Songs</h3>
                  <ul className="divide-y divide-line/10 border border-line/10">
                    {FAV_SONGS.map((s) => (
                      <li key={s.title} className="bg-bg-2 px-4 py-3 text-sm">
                        <span className="text-strong">{s.title}</span> <span className="text-muted">— {s.artist}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {FAV_MOVIES.length > 0 && (
                <div>
                  <h3 className="mb-3 font-serif text-lg font-bold text-strong">Movies</h3>
                  <ul className="divide-y divide-line/10 border border-line/10">
                    {FAV_MOVIES.map((m) => (
                      <li key={m.title} className="bg-bg-2 px-4 py-3 text-sm">
                        <span className="text-strong">{m.title}</span>
                        {m.note && <span className="text-muted"> — {m.note}</span>}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>
        )}
      </div>
    </>
  )
}
