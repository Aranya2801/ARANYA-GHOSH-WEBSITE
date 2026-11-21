import type { Metadata } from 'next'
import { Badge, Cell, PageHero, Panel, SectionLabel, Tag } from '@/components/ui'
import { FadeUp } from '@/components/ui/motion'
import { EXPERIENCE, INTERESTS } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Research',
  description: 'Research experience, publication and interests of Aranya Ghosh.',
}

export default function ResearchPage() {
  return (
    <>
      <PageHero accent="violet" eyebrow="research" title={<>Research <span className="text-gradient-research italic">life</span></>} subtitle="Three research internships, one paper, and a PhD in AI/ML as the goal." />

      <div className="mx-auto max-w-5xl space-y-20 px-6 py-16 md:px-12">
        <section>
          <SectionLabel accent="violet">timeline</SectionLabel>
          <ol className="space-y-6">
            {EXPERIENCE.map((x) => (
              <li key={`${x.org}-${x.period}`}>
                <FadeUp>
                  <div className="border border-line/10 border-l-2 border-l-research-violet bg-bg-2 p-6">
                    <div className="mb-2 flex flex-wrap items-center gap-3">
                      <Badge accent="violet">{x.badge}</Badge>
                      <span className="font-mono text-[11px] text-muted">{x.period} · {x.org}</span>
                    </div>
                    <h3 className="font-serif text-xl font-bold text-strong">{x.title}</h3>
                    <p className="mt-1 text-sm text-research-violet">{x.role}</p>
                    <ul className="mt-3 list-disc space-y-1.5 pl-4 text-sm leading-relaxed text-muted">
                      {x.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {x.tools.map((t) => (
                        <Tag key={t}>{t}</Tag>
                      ))}
                    </div>
                  </div>
                </FadeUp>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <SectionLabel accent="violet">research interests</SectionLabel>
          <Panel className="md:grid-cols-2 lg:grid-cols-4">
            {INTERESTS.map((i) => (
              <Cell key={i.title}>
                <h3 className="font-serif text-base font-bold text-strong">{i.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted">{i.sub}</p>
              </Cell>
            ))}
          </Panel>
        </section>
      </div>
    </>
  )
}
