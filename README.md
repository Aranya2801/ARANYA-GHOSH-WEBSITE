# aranyaghosh.org

Source for my personal website: a résumé, research page, photo diary and blog.

Built with Next.js, TypeScript, Tailwind and Framer Motion. Posts are Markdown files in `content/`, and résumé data lives in `lib/data.ts`.

```bash
npm install
npm run dev
```

- New post: `npm run new:post -- "Title"` (or `new:diary`). Remove `draft: true` to publish.
- Photos: put them in `public/photos/school`, `college` or `life`.
- The contact form needs `RESEND_API_KEY` and/or `DATABASE_URL`; see `.env.example`. Without them it asks visitors to email me.

Deployed on Vercel. MIT licensed.

[LinkedIn](https://www.linkedin.com/in/aranya-ghosh-754188207/) · [GitHub](https://github.com/Aranya2801)
