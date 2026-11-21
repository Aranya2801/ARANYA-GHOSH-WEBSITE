import Link from 'next/link'
import Hero, { type World } from '@/components/Hero'
import { SectionLabel, Tag } from '@/components/ui'
import { FadeUp } from '@/components/ui/motion'
import { STATS } from '@/lib/data'
import { getLatest } from '@/lib/content'
import { formatDate } from '@/lib/utils'
import { SITE } from '@/lib/site'

const WORLDS: World[] = [
  { href: '/diary', title: 'Diary', tagline: 'The person behind the work', desc: 'Life chapters, photos from school and college, hobbies and journal entries.', accent: 'gold' },
  { href: '/professional', title: 'Professional', tagline: 'The résumé, live', desc: 'Education, experience, projects, skills, certifications and live GitHub activity.', accent: 'cyan' },
  { href: '/research', title: 'Research', tagline: 'What I am curious about', desc: 'Published work, research internships and the questions I keep returning to.', accent: 'violet' },
  { href: '/blog', title: 'Blog', tagline: 'Notes and write-ups', desc: 'Technical notes and longer thoughts, written in Markdown.', accent: 'green' },
]

export default function Home() {
  const latest = getLatest(4)
  return (
    <>
      <Hero
        name={SITE.name}
        tagline={SITE.tagline}
        blurb="GATE 2026 AIR 3 in Data Science & AI. Machine-learning researcher, former intern at IIT Kharagpur and IIIT Nagpur, heading to Rutgers Business School for an MS in Information Technology & Analytics."
        stats={STATS}
        worlds={WORLDS}
      />

      {latest.length > 0 && (
        <section className="border-t border-line/10 px-6 py-16 md:px-12">
          <div className="mx-auto max-w-6xl">
            <SectionLabel>latest writing</SectionLabel>
            <div className="grid gap-px border border-line/10 bg-line/10 md:grid-cols-2">
              {latest.map((e, i) => (
                <FadeUp key={`${e.kind}-${e.slug}`} delay={i * 0.05} className="bg-bg-2">
                  <Link href={`/${e.kind}/${e.slug}`} className="group block h-full p-6 transition-colors hover:bg-bg-3">
                    <div className="mb-2 flex items-center gap-3 font-mono text-[10px] uppercase tracking-widest text-muted">
                      <span>{e.kind}</span>
                      <span aria-hidden>·</span>
                      <time dateTime={e.date}>{formatDate(e.date)}</time>
                    </div>
                    <h3 className="font-serif text-xl font-bold text-strong group-hover:text-research-green">{e.title}</h3>
                    {e.excerpt && <p className="mt-2 text-sm leading-relaxed text-muted">{e.excerpt}</p>}
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {e.tags.slice(0, 3).map((t) => (
                        <Tag key={t}>{t}</Tag>
                      ))}
                    </div>
                  </Link>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
