<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=200&section=header&text=ARANYA%20GHOSH&fontSize=60&fontColor=fff&animation=twinkling&fontAlignY=35&desc=aranyaghosh.org%20%E2%80%94%20Personal%20Universe&descAlignY=58&descSize=18" width="100%"/>

<br/>

[![Typing SVG](https://readme-typing-svg.demolab.com?font=JetBrains+Mono&size=18&duration=3000&pause=800&color=39E5A0&center=true&vCenter=true&multiline=true&repeat=true&width=700&height=80&lines=GATE+2026+AIR+3+%E2%80%94+Data+Science+%26+AI;MS-MITA+%40+Rutgers+Business+School+%7C+Fall+2026;Published+ML+Researcher+%7C+IIT-KGP+%26+IIIT-N+Alum)](https://git.io/typing-svg)

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

## 🌌 Three Worlds, One Universe

This is not just a portfolio. It's a **living personal operating system** — three distinct worlds unified into one experience:

<table>
<tr>
<td width="33%" align="center">
<h3>📔 My Diary</h3>
<p><em>The human behind the engineer</em></p>
<p>Life chapters · Photo memories · Favourite music & cinema · Daily vlogs · Hobbies & passions</p>
<img src="https://img.shields.io/badge/Palette-Amber_Gold-f5c842?style=flat-square&labelColor=06060a"/>
</td>
<td width="33%" align="center">
<h3>💼 Professional</h3>
<p><em>The engineer building the future</em></p>
<p>Full resume · 6+ ML projects · Tech stack · Certifications · GATE scores · Live GitHub stats</p>
<img src="https://img.shields.io/badge/Palette-Cyan_Blue-38d9f5?style=flat-square&labelColor=06060a"/>
</td>
<td width="33%" align="center">
<h3>🔬 Research</h3>
<p><em>The scientist at the frontier</em></p>
<p>Published paper · IIT-KGP & IIIT-N internships · PhD journey · Research interests · Collaborations</p>
<img src="https://img.shields.io/badge/Palette-Violet_Green-9b6dff?style=flat-square&labelColor=06060a"/>
</td>
</tr>
</table>

---

## ⚡ Tech Stack

<div align="center">

| Layer | Technology |
|:------|:-----------|
| **Framework** | Next.js 14 (App Router, RSC, SSG/ISR) |
| **Language** | TypeScript 5 — strict mode |
| **Styling** | Tailwind CSS + custom design tokens |
| **Animations** | Framer Motion (page transitions, scroll-triggered, micro-interactions) |
| **Database** | PostgreSQL via Prisma ORM (Neon serverless) |
| **Auth** | NextAuth.js v5 (future admin panel) |
| **Hosting** | Vercel (Edge Network, ISR, Analytics) |
| **CDN / DNS** | Cloudflare (global CDN, DDoS, SSL) |
| **Fonts** | Playfair Display · DM Sans · JetBrains Mono |
| **APIs** | GitHub REST API · Custom REST endpoints |
| **CI/CD** | GitHub Actions (lint → build → deploy) |
| **Dev Tools** | ESLint · Prettier · Husky · lint-staged |

</div>

---

## 🏗️ Project Architecture

```
ARANYA-GHOSH-WEBSITE/
│
├── app/                          # Next.js 14 App Router
│   ├── page.tsx                  # Landing — 3-world hub
│   ├── layout.tsx                # Root layout + metadata
│   ├── not-found.tsx             # Custom 404
│   ├── sitemap.ts                # Auto-generated sitemap
│   ├── robots.ts                 # SEO robots config
│   │
│   ├── diary/                    # 📔 Diary World
│   │   ├── layout.tsx
│   │   └── page.tsx              # Photos, timeline, music, movies, vlogs
│   │
│   ├── professional/             # 💼 Professional World
│   │   ├── layout.tsx
│   │   └── page.tsx              # Resume, projects, skills, certs
│   │
│   ├── research/                 # 🔬 Research World
│   │   ├── layout.tsx
│   │   └── page.tsx              # Publications, internships, PhD
│   │
│   ├── blog/                     # ✍️ Blog
│   │   ├── layout.tsx
│   │   ├── page.tsx              # Post list
│   │   └── [slug]/page.tsx       # Individual post (MDX)
│   │
│   └── api/                      # API Routes
│       ├── contact/route.ts      # Contact form → DB
│       ├── projects/route.ts     # Projects CRUD
│       ├── github/route.ts       # Live GitHub stats
│       └── blog/route.ts         # Blog posts
│
├── components/
│   ├── ui/                       # Design system primitives
│   │   ├── index.tsx             # SectionLabel, Tag, Badge, etc.
│   │   ├── motion.tsx            # Framer Motion wrappers
│   │   └── ThemeToggle.tsx       # Dark/light mode
│   │
│   ├── sections/                 # Page-level smart components
│   │   ├── GitHubStats.tsx       # Live GitHub widget
│   │   └── ContactForm.tsx       # Validated contact form
│   │
│   ├── diary/
│   │   └── PhotoGrid.tsx         # Interactive photo upload grid
│   │
│   └── Navbar.tsx                # Sticky animated navigation
│
├── lib/
│   ├── data.ts                   # All static content (edit this!)
│   ├── prisma.ts                 # Prisma singleton
│   └── utils.ts                  # cn(), formatDate(), etc.
│
├── hooks/                        # Custom React hooks
├── types/                        # TypeScript type definitions
├── prisma/
│   └── schema.prisma             # PostgreSQL schema
│
├── .github/
│   └── workflows/
│       └── ci.yml                # GitHub Actions CI/CD pipeline
│
├── middleware.ts                  # Route middleware + security headers
├── next.config.js                 # Next.js configuration
├── tailwind.config.ts             # Tailwind + custom tokens
├── vercel.json                    # Vercel deploy config + headers
└── .env.example                   # Environment variables template
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js ≥ 18
- Git
- A terminal

### 1. Clone & Install

```bash
git clone https://github.com/Aranya2801/ARANYA-GHOSH-WEBSITE.git
cd ARANYA-GHOSH-WEBSITE
npm install
```

### 2. Environment Setup

```bash
cp .env.example .env.local
```

Fill in your values (minimum required for local dev):

```env
NEXTAUTH_SECRET="any-long-random-string-32-chars-minimum"
NEXTAUTH_URL="http://localhost:3000"
GITHUB_TOKEN="ghp_your_token"        # optional — for live stats
```

### 3. Run locally

```bash
npm run dev
```

Open **http://localhost:3000** 🎉

### 4. Database (optional — enables contact form + dynamic content)

```bash
# Add DATABASE_URL to .env.local first (get free DB at neon.tech)
npm run db:push      # creates tables
npm run db:studio    # visual browser at localhost:5555
```

### 5. Deploy to Vercel

```bash
# One-time setup
npx vercel login
npx vercel link

# Deploy
npx vercel --prod
```

Or push to `main` — GitHub Actions auto-deploys via CI/CD pipeline.

---

## 🔑 Key Features

- **🌓 Dark/Light mode** — system preference + manual toggle, persisted
- **✨ Framer Motion animations** — page transitions, scroll-triggered reveals, micro-interactions
- **📸 Photo grid** — click to upload, previews instantly (Cloudinary integration ready)
- **📊 Live GitHub stats** — real-time repo count, stars, followers via GitHub API
- **📬 Contact form** — validated, stores to PostgreSQL, email notification ready
- **🗺️ SEO optimized** — dynamic metadata, OpenGraph, Twitter cards, sitemap, robots.txt
- **⚡ Edge-optimized** — ISR + Edge Runtime, Cloudflare CDN, 100/100 Lighthouse
- **🔐 Security headers** — CSP, HSTS, X-Frame-Options via middleware + Vercel
- **📱 Fully responsive** — mobile-first, works on all screen sizes
- **🤖 CI/CD pipeline** — GitHub Actions: lint → typecheck → build → deploy

---

## 📊 Performance

<div align="center">

| Metric | Score |
|:-------|:------|
| Performance | 🟢 98 |
| Accessibility | 🟢 100 |
| Best Practices | 🟢 100 |
| SEO | 🟢 100 |
| First Contentful Paint | < 0.8s |
| Time to Interactive | < 1.2s |

</div>

---

## 🧩 Personalization

All content lives in **`lib/data.ts`** — edit it like a config file:

```typescript
// Your favourite songs
export const FAV_SONGS = [
  { num: '01', title: 'Tum Hi Ho', artist: 'Arijit Singh' },
  // ...
]

// Your life chapters
export const LIFE_CHAPTERS = [
  { year: '2026', era: "what's next", title: 'GATE AIR 3 · Rutgers', body: '...' },
  // ...
]
```

---

## 👨‍💻 About Me

<div align="center">

| | |
|:---|:---|
| 🎓 **Education** | MS-MITA @ Rutgers Business School (Fall 2026) |
| 🏆 **GATE 2026** | AIR 3 — Data Science & AI (Top 0.01%) |
| 🏆 **GATE 2026** | AIR 147 — CS & IT |
| 📄 **Research** | Published peer-reviewed paper (IIIT Nagpur) |
| 🏛️ **Internships** | IIT Kharagpur · IIIT Nagpur · KIIT |
| 🎖️ **Award** | Best Research Initiative — KIIT DU |
| 💻 **Stack** | Python · TensorFlow · PyTorch · React · AWS |
| 🎯 **Goal** | PhD in AI/ML |

</div>

---

## 📬 Connect

<div align="center">

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin&logoColor=white&labelColor=06060a)]((https://www.linkedin.com/in/aranya-ghosh-754188207/))
[![GitHub](https://img.shields.io/badge/GitHub-Follow-white?style=for-the-badge&logo=github&labelColor=06060a)](https://github.com/Aranya2801)
[![Email](https://img.shields.io/badge/Email-Contact-39e5a0?style=for-the-badge&logo=gmail&logoColor=white&labelColor=06060a)](mailto:aranyaghoshriku2801@gmail.com)
[![Website](https://img.shields.io/badge/Website-Visit-f5c842?style=for-the-badge&logo=googlechrome&logoColor=black&labelColor=06060a)](https://aranyaghosh.org)

</div>

---

## 📄 License

MIT License — feel free to use this as inspiration, but please don't directly copy the personal content (it's mine! 😄)

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=100&section=footer&animation=twinkling" width="100%"/>

**Built with 🧠 intelligence, ☕ caffeine, and a PhD dream**

*GATE 2026 AIR 3 · MS-MITA @ Rutgers · aranyaghosh.org*

</div>
