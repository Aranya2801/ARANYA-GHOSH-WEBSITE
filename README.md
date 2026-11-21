<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=200&section=header&text=ARANYA%20GHOSH&fontSize=60&fontColor=fff&animation=twinkling&fontAlignY=35&desc=aranyaghosh.org&descAlignY=58&descSize=18" width="100%"/>

<br/>

[![Typing SVG](https://readme-typing-svg.demolab.com?font=JetBrains+Mono&size=18&duration=3000&pause=800&color=39E5A0&center=true&vCenter=true&multiline=true&repeat=true&width=700&height=80&lines=GATE+2026+AIR+3+%E2%80%94+Data+Science+%26+AI;MS-MITA+%40+Rutgers+Business+School+%7C+Fall+2026;ML+Researcher+%7C+IIT-KGP+%26+IIIT-N+Alum)](https://git.io/typing-svg)

<br/>

<p>
  <a href="https://aranyaghosh.org"><img src="https://img.shields.io/badge/🌐_Live_Site-aranyaghosh.org-39e5a0?style=for-the-badge&labelColor=06060a" /></a>
  <a href="https://github.com/Aranya2801/ARANYA-GHOSH-WEBSITE/stargazers"><img src="https://img.shields.io/github/stars/Aranya2801/ARANYA-GHOSH-WEBSITE?style=for-the-badge&logo=github&color=f5c842&labelColor=06060a" /></a>
  <a href="https://github.com/Aranya2801/ARANYA-GHOSH-WEBSITE/commits/main"><img src="https://img.shields.io/github/last-commit/Aranya2801/ARANYA-GHOSH-WEBSITE?style=for-the-badge&color=9b6dff&labelColor=06060a" /></a>
  <img src="https://img.shields.io/badge/Next.js-14-white?style=for-the-badge&logo=nextdotjs&labelColor=06060a" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178c6?style=for-the-badge&logo=typescript&labelColor=06060a" />
  <img src="https://img.shields.io/badge/Deployed-Vercel-white?style=for-the-badge&logo=vercel&labelColor=06060a" />
</p>

<br/>

> *"AI is the most transformative technology of our time — I want to be at its frontier, not just as a user, but as a builder and discoverer."*

</div>

---

Source code for the personal website of **Aranya Ghosh**: a résumé, research page, photo diary and blog.

## 🌌 Four sections, one site

<table>
<tr>
<td width="25%" align="center">
<h3>📔 Diary</h3>
<p><em>The human behind the engineer</em></p>
<p>Journal · life timeline · photos · hobbies · vlogs</p>
<img src="https://img.shields.io/badge/Accent-Gold-f5c842?style=flat-square&labelColor=06060a"/>
</td>
<td width="25%" align="center">
<h3>💼 Professional</h3>
<p><em>The résumé, live</em></p>
<p>Education · experience · projects · skills · certifications · GitHub activity</p>
<img src="https://img.shields.io/badge/Accent-Cyan-38d9f5?style=flat-square&labelColor=06060a"/>
</td>
<td width="25%" align="center">
<h3>🔬 Research</h3>
<p><em>What I'm curious about</em></p>
<p>Published paper · IIT-KGP &amp; IIIT-N internships · interests</p>
<img src="https://img.shields.io/badge/Accent-Violet-9b6dff?style=flat-square&labelColor=06060a"/>
</td>
<td width="25%" align="center">
<h3>✍️ Blog</h3>
<p><em>Notes and write-ups</em></p>
<p>Markdown posts · tag filter · RSS</p>
<img src="https://img.shields.io/badge/Accent-Green-39e5a0?style=flat-square&labelColor=06060a"/>
</td>
</tr>
</table>

---

## Contents

- [Features](#features)
- [Tech stack](#tech-stack)
- [Getting started](#getting-started)
- [Scripts](#scripts)
- [Project structure](#project-structure)
- [Writing content](#writing-content)
- [Adding photos](#adding-photos)
- [Editing résumé data](#editing-résumé-data)
- [Contact form](#contact-form)
- [Environment variables](#environment-variables)
- [Theming and design tokens](#theming-and-design-tokens)
- [SEO and feeds](#seo-and-feeds)
- [Security](#security)
- [Deployment](#deployment)
- [Continuous integration](#continuous-integration)
- [Troubleshooting](#troubleshooting)
- [License](#license)

## Features

- **Light and dark themes.** The theme is set before first paint, so there is no flash. It follows the system setting until the visitor picks one, and the choice is saved in `localStorage`.
- **Command palette.** `Ctrl + K` (or `⌘ + K`) opens a searchable list of pages, posts and actions (toggle theme, copy email, open GitHub or LinkedIn). It supports arrow keys, Enter and Escape, with ARIA combobox/listbox roles.
- **Markdown content.** Blog posts and diary entries are plain `.md` files. Frontmatter is validated at build time, so a mistake fails the build instead of silently hiding a post.
- **Photo gallery.** Images placed in `public/photos/` appear automatically with category filters and a keyboard-accessible lightbox.
- **Live GitHub section.** Repository count, stars, followers and top repositories are fetched on the server and cached for one hour.
- **Contact form.** Input validation, honeypot field and a per-IP rate limit. Delivers by email (Resend) and/or stores messages in PostgreSQL. Without either configured, it tells visitors to email directly rather than pretending to succeed.
- **Print-friendly résumé.** A button on `/professional` opens the print dialog; a print stylesheet forces light colours and hides navigation.
- **Motion with restraint.** Framer Motion reveals and card tilt, particle background on the landing page. Everything respects the "reduce motion" system setting, and the particle animation pauses when the tab is hidden.
- **Accessibility.** Skip link, labelled form fields, `aria-live` status messages, focus-managed lightbox and palette, semantic headings.
- **Technical SEO.** Per-page metadata, canonical URLs, JSON-LD (Person, BlogPosting), sitemap, robots, RSS, generated Open Graph image and favicon, web manifest.
- **Self-hosted fonts** via Fontsource (no requests to Google Fonts).

## Tech stack

| Area | Choice |
| --- | --- |
| Framework | Next.js 14 (App Router), React 18 |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS with CSS-variable design tokens |
| Animation | Framer Motion 11 |
| Content | Markdown + `gray-matter` + `zod`, rendered with `react-markdown` and `remark-gfm` (raw HTML is not rendered) |
| Icons | `lucide-react` |
| Database (optional) | PostgreSQL via the `postgres` driver — no ORM |
| Email (optional) | Resend HTTP API |
| Images | `next/image` with `sharp` |
| Hosting | Vercel |
| Tooling | ESLint (`next/core-web-vitals`), Prettier with the Tailwind plugin, GitHub Actions |

## Getting started

### Requirements

- Node.js 18.17 or newer (CI uses Node 20)
- npm

### Install and run

```bash
git clone https://github.com/Aranya2801/ARANYA-GHOSH-WEBSITE.git
cd ARANYA-GHOSH-WEBSITE
npm install
npm run dev
```

Open <http://localhost:3000>. No environment variables are needed for local development. To try the optional features, copy the example file:

```bash
cp .env.example .env.local
```

### Production build

```bash
npm run build
npm run start
```

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Development server with hot reload. Draft posts are visible here. |
| `npm run build` | Production build. Fails on type errors, lint errors or invalid frontmatter. |
| `npm run start` | Serves the production build. |
| `npm run lint` | ESLint. |
| `npm run typecheck` | `tsc --noEmit`. |
| `npm run format` | Prettier. |
| `npm run new:post -- "Title"` | Creates `content/blog/<slug>.md` as a draft. |
| `npm run new:diary -- "Title"` | Creates `content/diary/<slug>.md` as a draft. |

## Project structure

```
.
├── app/
│   ├── layout.tsx              Root layout: fonts, theme script, navbar, palette, footer, JSON-LD
│   ├── page.tsx                Landing page
│   ├── diary/                  Diary index and [slug] entry pages
│   ├── blog/                   Blog index and [slug] post pages
│   ├── professional/           Résumé page
│   ├── research/               Research page
│   ├── api/contact/route.ts    Contact form endpoint
│   ├── feed.xml/route.ts       RSS feed (blog)
│   ├── sitemap.ts, robots.ts, manifest.ts
│   ├── icon.tsx, opengraph-image.tsx
│   ├── not-found.tsx
│   └── globals.css             Design tokens, base styles, markdown typography, print rules
├── components/
│   ├── Navbar.tsx              Navigation, theme toggle, scroll progress, mobile menu
│   ├── CommandPalette.tsx
│   ├── Hero.tsx                Landing hero, particles, tilting cards
│   ├── EntryList.tsx           Searchable, tag-filterable list of posts/entries
│   ├── EntryPage.tsx           Single post/entry layout
│   ├── Gallery.tsx             Photo grid and lightbox
│   ├── Markdown.tsx
│   ├── PrintButton.tsx
│   ├── SiteFooter.tsx
│   ├── sections/               ContactForm, GithubSection
│   └── ui/                     Shared primitives and motion helpers
├── content/
│   ├── blog/                   Markdown posts (+ _template.md)
│   └── diary/                  Markdown entries (+ _template.md)
├── lib/
│   ├── data.ts                 Résumé and research data
│   ├── content.ts              Markdown loader and frontmatter validation
│   ├── photos.ts               Reads public/photos
│   ├── github.ts               GitHub API summary
│   ├── db.ts                   Optional PostgreSQL client
│   ├── site.ts                 Site name, URL, contact links, navigation
│   └── utils.ts
├── public/photos/              school/, college/, life/
├── scripts/new-entry.mjs       Post/entry generator
├── .github/                    CI workflow and Dependabot config
└── next.config.js              Image config, security headers, redirects
```

## Writing content

### Create a post or entry

```bash
npm run new:post  -- "My title"     # blog
npm run new:diary -- "My title"     # diary
```

The new file starts with `draft: true`. Drafts show up only in `npm run dev`. Delete that line when you want to publish. Commit and push; the page, sitemap and RSS feed update on the next deploy.

You can also copy `_template.md` in either folder. Files whose names start with `_` are ignored.

### Frontmatter

```yaml
---
title: "Required"
date: 2026-01-31                 # required, any ISO date
excerpt: "Optional summary"      # defaults to the first paragraph
tags: [ml, notes]                # optional
featured: false                  # optional
draft: false                     # optional; true hides it in production
mood: "calm"                     # optional, shown on diary entries
youtube: "dQw4w9WgXcQ"           # optional 11-character id, embeds a vlog
---
```

If a required field is missing or `youtube` is not an 11-character id, the build stops with a message naming the file and the problem.

### Markdown support

GitHub-flavoured Markdown: tables, task lists, strikethrough, fenced code blocks, images and links. External links open in a new tab. Raw HTML in Markdown is intentionally not rendered.

Estimated reading time is calculated from word count (about 220 words per minute).

## Adding photos

Put image files (`.jpg`, `.jpeg`, `.png`, `.webp`, `.avif`) in one of:

```
public/photos/school/
public/photos/college/
public/photos/life/
```

Folder names become the gallery filters (school, college, life first, then any others alphabetically). Captions default to a cleaned-up version of the filename. To set your own, add `public/photos/captions.json`:

```json
{
  "school/farewell-day.jpg": "Last day of Class 12",
  "college/fest-2022.jpg": "Tech fest, 2022"
}
```

If the folders are empty, the diary page shows a short "coming soon" message instead of an empty gallery. Large originals are resized by `next/image` automatically, but exporting photos at around 2000 px on the long side keeps the repository small.

## Editing résumé data

Everything on `/professional` and `/research`, plus the timeline and hobbies on `/diary`, comes from `lib/data.ts`:

| Export | Used for |
| --- | --- |
| `STATS` | Numbers on the landing page |
| `EDUCATION`, `EXAMS` | Education cards and exam ranks |
| `EXPERIENCE` | Research internships (shown on both `/professional` and `/research`) |
| `PROJECTS` | Project cards; add an optional `github` URL to show a "View source" link |
| `SKILLS`, `CERTIFICATIONS`, `LEADERSHIP` | Corresponding résumé sections |
| `INTERESTS` | Research interests |
| `CHAPTERS`, `HOBBIES` | Diary timeline and hobbies |
| `FAV_SONGS`, `FAV_MOVIES` | Leave empty to hide the Favourites section; add entries to show it |

Site-wide identity (name, tagline, email, GitHub and LinkedIn URLs, navigation) is in `lib/site.ts`.

## Contact form

`POST /api/contact` with JSON `{ name, email, subject?, message }`.

Behaviour:

1. Rate limit: 5 requests per hour per IP, held in memory (per server instance, best-effort).
2. Validation with zod: name required, valid email, message 10–4000 characters.
3. A hidden `website` field acts as a honeypot. If it is filled in, the request returns success without delivering anything.
4. Delivery:
   - If `RESEND_API_KEY` is set, an email is sent through Resend with `reply_to` set to the sender.
   - If `DATABASE_URL` is set, the message is stored in a `contact_messages` table, which is created on first use.
   - Either one succeeding counts as delivered.

| Status | Meaning |
| --- | --- |
| 200 | Delivered (or honeypot triggered) |
| 400 | Invalid input; the message explains what to fix |
| 429 | Rate limit exceeded |
| 502 | Services are configured but delivery failed |
| 503 | Neither Resend nor a database is configured |

> The in-memory rate limiter resets when the server restarts and is not shared between serverless instances. It deters casual abuse; for stronger protection add Cloudflare rate limiting or a service such as Upstash.

## Environment variables

All are optional. See `.env.example`.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL, used for metadata, sitemap and feed. Defaults to `https://aranyaghosh.org`. |
| `RESEND_API_KEY` | Enables email delivery for the contact form. |
| `CONTACT_TO_EMAIL` | Where messages are sent. Defaults to the address in `lib/site.ts`. |
| `CONTACT_FROM_EMAIL` | Sender address. Must be on a domain verified in Resend. Defaults to Resend's test sender. |
| `DATABASE_URL` | PostgreSQL connection string (for example from Neon) to store messages. |
| `GITHUB_TOKEN` | Raises the GitHub API rate limit for the live stats. A token with no scopes is enough. |

Never commit `.env.local`; it is git-ignored.

## Theming and design tokens

Colours are CSS variables defined in `app/globals.css` for both themes and mapped into Tailwind in `tailwind.config.ts` (for example `text-strong`, `bg-bg-2`, `border-line/10`). Each section has its own accent:

| Section | Accent |
| --- | --- |
| Diary | gold |
| Professional | cyan |
| Research | violet |
| Blog | green |

To change the palette, edit the variables under `:root` (dark) and `[data-theme='light']`.

Tailwind only generates classes it can find as literal strings in the source. When adding a new accent, write full class names (as in `components/ui/index.tsx`) rather than building them with string concatenation.

## SEO and feeds

- Titles use the template `%s · Aranya Ghosh`.
- `/sitemap.xml` includes all pages, posts and entries.
- `/robots.txt` allows everything except `/api/`.
- `/feed.xml` is an RSS 2.0 feed of blog posts.
- `/opengraph-image` and `/icon` are generated with `next/og`, so there are no image files to maintain.
- Short redirects: `/cv` and `/resume` go to `/professional`; `/github` and `/linkedin` go to the profiles.

## Security

`next.config.js` sets `X-Content-Type-Options`, `X-Frame-Options: DENY`, a strict `Referrer-Policy`, `Permissions-Policy` and HSTS. Markdown is rendered without raw HTML, the contact endpoint validates and escapes everything it emails, and YouTube embeds use `youtube-nocookie.com`.

To report a security problem, email the address below.

## Deployment

### Vercel

1. Import the repository at <https://vercel.com/new>. The Next.js preset needs no changes.
2. Add any variables from the table above under Settings → Environment Variables.
3. Under Settings → Domains add `aranyaghosh.org` and follow the DNS instructions.
4. Every push to `main` deploys to production; pull requests get preview URLs.

### Cloudflare (optional)

Cloudflare can manage DNS for the domain. Use the records Vercel shows, and set them to **DNS only** (grey cloud) unless you have a reason to proxy, since proxying Vercel can interfere with its certificates.

### Other hosts

Any Node host works with `npm run build && npm run start`. Static export is not supported because the contact route needs a server.

## Continuous integration

`.github/workflows/ci.yml` runs on every push to `main` and every pull request: install, lint, typecheck, build. It needs no secrets. Dependabot opens weekly dependency update PRs.

Run the same checks locally before pushing:

```bash
npm run lint && npm run typecheck && npm run build
```

## Troubleshooting

**Build fails with "Invalid frontmatter in content/…"**
The message names the file and field. Check the date format and that `youtube` is exactly 11 characters.

**A new post does not appear.**
Check that `draft: true` is removed, the file does not start with `_`, and you redeployed.

**GitHub section says data is unavailable.**
The API rate limit was hit or GitHub was unreachable. Add a `GITHUB_TOKEN`. The page keeps working and retries after an hour.

**Contact form returns 503.**
Neither `RESEND_API_KEY` nor `DATABASE_URL` is set in that environment.

**Resend emails are rejected.**
`CONTACT_FROM_EMAIL` must use a domain you have verified in Resend. Until then, leave it unset to use Resend's test sender, which can only send to your own account email.

**A Tailwind class has no effect.**
Make sure the full class name appears literally in a source file, and that opacity values exist in Tailwind's scale (for example `/10`, `/20`, not `/7`).

**Theme flashes on load.**
Do not remove the inline script in `app/layout.tsx`; it sets the theme before the first paint.

## 👨‍💻 About me

<div align="center">

| | |
|:---|:---|
| 🎓 **Education** | MS-MITA @ Rutgers Business School (Fall 2026) |
| 🏆 **GATE 2026** | AIR 3 — Data Science & AI |
| 🏆 **GATE 2026** | AIR 147 — CS & IT |
| 📄 **Research** | Peer-reviewed paper (IIIT Nagpur) |
| 🏛️ **Internships** | IIT Kharagpur · IIIT Nagpur · KIIT |
| 🎖️ **Award** | Best Research Initiative — KIIT DU |
| 💻 **Stack** | Python · TensorFlow · PyTorch · React · AWS |
| 🎯 **Goal** | PhD in AI/ML |

</div>

## 📬 Connect

<div align="center">

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin&logoColor=white&labelColor=06060a)](https://www.linkedin.com/in/aranya-ghosh-754188207/)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-white?style=for-the-badge&logo=github&labelColor=06060a)](https://github.com/Aranya2801)
[![Email](https://img.shields.io/badge/Email-Contact-39e5a0?style=for-the-badge&logo=gmail&logoColor=white&labelColor=06060a)](mailto:aranyaghoshriku2801@gmail.com)
[![Website](https://img.shields.io/badge/Website-Visit-f5c842?style=for-the-badge&logo=googlechrome&logoColor=black&labelColor=06060a)](https://aranyaghosh.org)

</div>

## License

MIT — see [LICENSE](LICENSE).

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=100&section=footer&animation=twinkling" width="100%"/>

**Built with 🧠 intelligence, ☕ caffeine, and a PhD dream**

*GATE 2026 AIR 3 · MS-MITA @ Rutgers · aranyaghosh.org*

</div>
