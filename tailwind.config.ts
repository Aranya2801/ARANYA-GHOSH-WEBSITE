import type { Config } from 'tailwindcss'

// Every colour is a CSS variable (see app/globals.css) so light/dark themes
// and print styles switch without touching component code.
const v = (name: string) => `rgb(var(--${name}) / <alpha-value>)`

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './content/**/*.md'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display Variable"', 'Georgia', 'serif'],
        sans: ['"DM Sans Variable"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono Variable"', 'ui-monospace', 'monospace'],
      },
      colors: {
        bg: { DEFAULT: v('bg'), 2: v('bg2'), 3: v('bg3') },
        ink: v('ink'),
        strong: v('strong'),
        muted: v('muted'),
        line: v('line'),
        diary: { gold: v('gold'), amber: v('amber'), rose: v('rose') },
        pro: { cyan: v('cyan'), blue: v('blue'), ice: v('ice') },
        research: { violet: v('violet'), green: v('green'), lavender: v('lavender') },
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4,0,0.6,1) infinite',
      },
    },
  },
  plugins: [],
}

export default config
