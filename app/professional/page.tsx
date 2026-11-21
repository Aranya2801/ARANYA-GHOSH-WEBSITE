import type { Metadata } from 'next'
import GithubSection from '@/components/sections/GithubSection'
import ContactForm from '@/components/sections/ContactForm'
import PrintButton from '@/components/PrintButton'
import { Badge, Cell, PageHero, Panel, SectionLabel, Tag } from '@/components/ui'
import { FadeUp } from '@/components/ui/motion'
import { CERTIFICATIONS, EDUCATION, EXAMS, EXPERIENCE, LEADERSHIP, PROJECTS, SKILLS } from '@/lib/data'
import { SITE } from '@/lib/site'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Professional',
  description: 'Résumé of Aranya Ghosh: education, research experience, projects, skills and certifications.',
}

export default function ProfessionalPage() {
  return (
    <>
      <PageHero accent="cyan" eyebrow="// virtual résumé" title={<>Pro<span className="text-gradient-pro italic">fessional</span></>} subtitle="Education, research, projects and skills — one page, always current.">
        <div className="mt-6 flex flex-wrap items-center gap-4 font-mono text-[11px]">
          <PrintButton />
          <a className="text-muted hover:text-strong" href={`mailto:${SITE.email}`}>{SITE.email}</a>
          <a className="text-muted hover:text-strong" href={SITE.linkedinUrl} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="text-muted hover:text-strong" href={SITE.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </PageHero>

      <div className="mx-auto max-w-6xl space-y-20 px-6 py-16 md:px-12">
        <section>
          <SectionLabel accent="cyan">education</SectionLabel>
          <div className="grid gap-4 md:grid-cols-2">
            {EDUCATION.map((e) => (
              <FadeUp key={e.degree}>
                <div className="h-full border border-line/10 bg-bg-2 p-6">
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <span className="font-mono text-[11px] text-muted">{e.period}</span>
                    <Badge accent="cyan">{e.badge}</Badge>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-strong">{e.degree}</h3>
                  <p className="mt-1 text-sm text-pro-cyan">{e.school}</p>
                  <p className="text-xs text-muted">{e.place}</p>
                  <ul className="mt-3 list-disc space-y-1 pl-4 text-sm text-muted">
                    {e.notes.map((n) => (
                      <li key={n}>{n}</li>
                    ))}
                  </ul>
                </div>
              </FadeUp>
            ))}
          </div>
        </section>

        <section>
          <SectionLabel accent="cyan">entrance exams &amp; ranks</SectionLabel>
          <Panel className="md:grid-cols-2 lg:grid-cols-3">
            {EXAMS.map((x) => (
              <Cell key={x.exam}>
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted">{x.year}</div>
                <h3 className="mt-1 text-sm font-semibold text-strong">{x.exam}</h3>
                <p className={x.highlight ? 'mt-2 font-serif text-xl font-black text-pro-cyan' : 'mt-2 font-serif text-xl font-bold text-strong'}>{x.result}</p>
                <p className="mt-1 text-xs text-muted">{x.note}</p>
              </Cell>
            ))}
          </Panel>
        </section>

        <section>
          <SectionLabel accent="cyan">experience</SectionLabel>
          <div className="space-y-4">
            {EXPERIENCE.map((x) => (
              <FadeUp key={`${x.org}-${x.period}`}>
                <div className="border border-line/10 bg-bg-2 p-6">
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <Badge accent={x.kind === 'published' ? 'violet' : x.kind === 'award' ? 'gold' : 'cyan'}>{x.badge}</Badge>
                    <span className="font-mono text-[11px] text-muted">{x.period}</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-strong">{x.role}</h3>
                  <p className="text-sm text-pro-cyan">{x.org} <span className="text-muted">· {x.place}</span></p>
                  <p className="mt-3 text-sm italic text-ink">{x.title}</p>
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
            ))}
          </div>
        </section>

        <section>
          <SectionLabel accent="cyan">projects</SectionLabel>
          <Panel className="md:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((p) => (
              <Cell key={p.title} className="flex flex-col">
                <div className="mb-2 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-muted">
                  <span>{p.category}</span>
                  <span>{p.year}</span>
                </div>
                <h3 className="font-serif text-lg font-bold text-strong">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{p.summary}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
                {p.github && (
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="mt-3 font-mono text-[11px] text-pro-cyan hover:underline">
                    View source →
                  </a>
                )}
              </Cell>
            ))}
          </Panel>
        </section>

        <section>
          <SectionLabel accent="cyan">skills</SectionLabel>
          <div className="grid gap-px border border-line/10 bg-line/10 md:grid-cols-2">
            {SKILLS.map((s) => (
              <div key={s.group} className="bg-bg-2 p-5">
                <h3 className="mb-3 font-mono text-[11px] uppercase tracking-widest text-pro-cyan">{s.group}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {s.items.map((i) => (
                    <Tag key={i}>{i}</Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionLabel accent="cyan">leadership &amp; community</SectionLabel>
          <Panel className="md:grid-cols-3">
            {LEADERSHIP.map((l) => (
              <Cell key={l.role}>
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted">{l.period}</div>
                <h3 className="mt-1 font-serif text-base font-bold text-strong">{l.role}</h3>
                <p className="text-xs text-pro-cyan">{l.org}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{l.body}</p>
              </Cell>
            ))}
          </Panel>
        </section>

        <section>
          <SectionLabel accent="cyan">certifications</SectionLabel>
          <ul className="grid gap-px border border-line/10 bg-line/10 md:grid-cols-2">
            {CERTIFICATIONS.map((c) => (
              <li key={c.name} className="flex items-baseline justify-between gap-4 bg-bg-2 px-4 py-3 text-sm">
                <span>
                  <span className="text-strong">{c.name}</span> <span className="text-muted">— {c.org}</span>
                </span>
                <span className="shrink-0 font-mono text-[10px] text-muted">{c.date}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="no-print">
          <SectionLabel accent="cyan">github · live</SectionLabel>
          <GithubSection />
        </section>

        <section className="no-print" id="contact">
          <SectionLabel accent="cyan">get in touch</SectionLabel>
          <div className="max-w-2xl">
            <ContactForm email={SITE.email} />
          </div>
        </section>
      </div>
    </>
  )
}
