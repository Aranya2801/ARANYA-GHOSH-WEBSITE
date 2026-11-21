export const SITE = {
  name: 'Aranya Ghosh',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://aranyaghosh.org',
  tagline: 'AI researcher · engineer · PhD aspirant',
  description:
    'GATE 2026 AIR 3 (DS & AI) · MS-MITA at Rutgers Business School · ML/AI researcher · IIT Kharagpur & IIIT Nagpur alum',
  email: 'aranyaghoshriku2801@gmail.com',
  github: 'Aranya2801',
  githubUrl: 'https://github.com/Aranya2801',
  linkedinUrl: 'https://www.linkedin.com/in/aranya-ghosh-754188207/',
} as const

export const NAV = [
  { label: 'Diary', href: '/diary', accent: 'gold' },
  { label: 'Professional', href: '/professional', accent: 'cyan' },
  { label: 'Research', href: '/research', accent: 'violet' },
  { label: 'Blog', href: '/blog', accent: 'green' },
] as const
