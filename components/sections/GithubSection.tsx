import { ArrowUpRight, Star } from 'lucide-react'
import { getGithubSummary } from '@/lib/github'
import { SITE } from '@/lib/site'
import { Cell, EmptyState, Panel } from '@/components/ui'

/** Server component: data is fetched at build/ISR time, so nothing loads client-side. */
export default async function GithubSection() {
  const gh = await getGithubSummary()

  if (!gh) {
    return (
      <EmptyState>
        Live GitHub data is unavailable right now. See{' '}
        <a className="underline" href={SITE.githubUrl} target="_blank" rel="noopener noreferrer">
          github.com/{SITE.github}
        </a>
        .
      </EmptyState>
    )
  }

  return (
    <div>
      <div className="mb-4 grid grid-cols-3 gap-px border border-line/10 bg-line/10">
        {[
          ['Public repos', gh.publicRepos],
          ['Stars earned', gh.totalStars],
          ['Followers', gh.followers],
        ].map(([label, value]) => (
          <div key={label} className="bg-bg-2 p-5 text-center">
            <div className="font-serif text-3xl font-black text-pro-cyan">{value}</div>
            <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted">{label}</div>
          </div>
        ))}
      </div>
      <Panel className="md:grid-cols-2 lg:grid-cols-3">
        {gh.repos.map((r) => (
          <a key={r.name} href={r.url} target="_blank" rel="noopener noreferrer" className="group block">
            <Cell className="h-full">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-mono text-sm font-semibold text-strong group-hover:text-pro-cyan">{r.name}</h3>
                <ArrowUpRight size={14} className="shrink-0 text-muted" aria-hidden />
              </div>
              <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-muted">{r.description ?? 'No description yet.'}</p>
              <div className="mt-4 flex items-center gap-4 font-mono text-[10px] text-muted">
                {r.language && <span>{r.language}</span>}
                <span className="inline-flex items-center gap-1">
                  <Star size={11} aria-hidden /> {r.stars}
                </span>
              </div>
            </Cell>
          </a>
        ))}
      </Panel>
    </div>
  )
}
