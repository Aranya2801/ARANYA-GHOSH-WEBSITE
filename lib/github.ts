import 'server-only'
import { SITE } from '@/lib/site'

export interface Repo {
  name: string
  url: string
  description: string | null
  language: string | null
  stars: number
}

export interface GithubSummary {
  publicRepos: number
  followers: number
  totalStars: number
  repos: Repo[]
}

interface ApiRepo {
  name: string
  html_url: string
  description: string | null
  language: string | null
  stargazers_count: number
  fork: boolean
  archived: boolean
  pushed_at: string
}

/** Fetched on the server and cached for an hour, so there is no client-side flash or rate-limit risk. */
export async function getGithubSummary(): Promise<GithubSummary | null> {
  const headers: HeadersInit = {
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
    ...(process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {}),
  }
  const opts = { headers, next: { revalidate: 3600 } }

  try {
    const [userRes, repoRes] = await Promise.all([
      fetch(`https://api.github.com/users/${SITE.github}`, opts),
      fetch(`https://api.github.com/users/${SITE.github}/repos?per_page=100&sort=pushed`, opts),
    ])
    if (!userRes.ok || !repoRes.ok) return null

    const user = (await userRes.json()) as { public_repos: number; followers: number }
    const all = (await repoRes.json()) as ApiRepo[]
    const own = all.filter((r) => !r.fork && !r.archived)

    return {
      publicRepos: user.public_repos,
      followers: user.followers,
      totalStars: own.reduce((n, r) => n + r.stargazers_count, 0),
      repos: own
        .sort((a, b) => b.stargazers_count - a.stargazers_count || b.pushed_at.localeCompare(a.pushed_at))
        .slice(0, 6)
        .map((r) => ({
          name: r.name,
          url: r.html_url,
          description: r.description,
          language: r.language,
          stars: r.stargazers_count,
        })),
    }
  } catch {
    return null
  }
}
