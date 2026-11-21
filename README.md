# ARANYA-GHOSH-WEBSITE

Personal site of **Aranya Ghosh** — [aranyaghosh.org](https://aranyaghosh.org). Four sections, one codebase:

| Section | What it is |
| --- | --- |
| **/diary** | Journal entries, life chapters, photo gallery with lightbox, hobbies, optional favourites |
| **/professional** | Résumé: education, ranks, experience, projects, skills, certifications, live GitHub stats, contact form, print-to-PDF |
| **/research** | Research timeline and interests |
| **/blog** | Markdown posts with tag filter, RSS (`/feed.xml`), JSON-LD |

Also: dark/light theme (no flash), ⌘K / Ctrl+K command palette, scroll progress, reduced-motion support, sitemap, robots, web manifest, generated OG image and favicon, security headers.

## Stack

Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion · Markdown files as the CMS · optional PostgreSQL + Resend for the contact form · self-hosted fonts. Deployed on Vercel.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint && npm run typecheck && npm run build
```

No environment variables are required. Copy `.env.example` to `.env.local` to enable optional features.

## Writing

```bash
npm run new:post  -- "My title"    # content/blog/my-title.md
npm run new:diary -- "My title"    # content/diary/my-title.md
```

New files are created with `draft: true` (visible only in `npm run dev`). Remove that line to publish. Frontmatter is validated at build time, so a typo fails loudly instead of silently dropping a post. Files starting with `_` are templates and ignored. A diary entry can embed a vlog with `youtube: "<11-char id>"`.

The two files shipped in `content/` are **placeholders** — replace them with your own writing.

## Photos

Drop images into `public/photos/school/`, `college/` or `life/`. Optional captions in `public/photos/captions.json`:

```json
{ "school/farewell-day.jpg": "Last day of Class 12" }
```

## Editing the résumé

Résumé and research content lives in `lib/data.ts` (education, experience, projects, skills, certifications, life chapters, hobbies). Fill `FAV_SONGS` / `FAV_MOVIES` and a Favourites section appears on `/diary`.

## Contact form

`POST /api/contact` validates input (zod), has a honeypot and a per-IP rate limit (5/hour, per server instance), then delivers by:

- **Resend** if `RESEND_API_KEY` is set (`CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` optional), and/or
- **PostgreSQL** if `DATABASE_URL` is set (table `contact_messages` is created automatically).

With neither configured the form tells the visitor to email directly (HTTP 503) rather than pretending to succeed.

## Deploy

1. Import the repo on [Vercel](https://vercel.com/new) (framework: Next.js, defaults are fine).
2. Add any environment variables from `.env.example`.
3. Add `aranyaghosh.org` under Project → Domains and follow the DNS instructions (Cloudflare works in DNS-only mode).

CI (`.github/workflows/ci.yml`) runs lint, typecheck and build on every push and PR.

## Structure

```
app/           routes, API, feed, sitemap, OG image
components/    Navbar, CommandPalette, Gallery, EntryList, Hero, sections/, ui/
content/       blog/ and diary/ Markdown
lib/           data.ts, content loader, photos, GitHub, db
public/photos/ your images
scripts/       new-entry.mjs
```

## Contact

[LinkedIn](https://www.linkedin.com/in/aranya-ghosh-754188207/) · [GitHub](https://github.com/Aranya2801) · aranyaghoshriku2801@gmail.com

MIT licensed.
