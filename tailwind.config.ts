import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        mono:  ['var(--font-jetbrains)', 'monospace'],
        sans:  ['var(--font-dm-sans)', 'sans-serif'],
      },
      colors: {
        bg: {
          DEFAULT: '#06060a',
          2: '#0c0c14',
          3: '#12121e',
          surface: '#18182a',
        },
        diary: { gold: '#f5c842', amber: '#e8874a', rose: '#e06b75' },
        pro:   { cyan: '#38d9f5', blue: '#4a8cff', ice: '#a8d8ea' },
        research: { violet: '#9b6dff', green: '#39e5a0', lavender: '#c4b5fd' },
        text: { DEFAULT: '#e8e8f5', muted: '#656585' },
      },
      animation: {
        'blink':       'blink 1.1s step-end infinite',
        'pulse-slow':  'pulse 3s cubic-bezier(0.4,0,0.6,1) infinite',
        'float':       'float 6s ease-in-out infinite',
        'shimmer':     'shimmer 2s linear infinite',
        'glow-pulse':  'glowPulse 2s ease-in-out infinite',
        'scan':        'scan 4s linear infinite',
      },
      keyframes: {
        blink:     { '0%,100%': { opacity: '1' }, '50%': { opacity: '0' } },
        float:     { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
        shimmer:   { from: { backgroundPosition: '-200% 0' }, to: { backgroundPosition: '200% 0' } },
        glowPulse: { '0%,100%': { opacity: '0.6' }, '50%': { opacity: '1' } },
        scan:      { from: { transform: 'translateY(-100%)' }, to: { transform: 'translateY(100vh)' } },
      },
      backgroundImage: {
        'grid-diary':    'linear-gradient(rgba(245,200,66,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(245,200,66,0.025) 1px, transparent 1px)',
        'grid-pro':      'linear-gradient(rgba(56,217,245,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(56,217,245,0.025) 1px, transparent 1px)',
        'grid-research': 'linear-gradient(rgba(155,109,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(155,109,255,0.025) 1px, transparent 1px)',
        'shimmer-gradient': 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.04) 50%, transparent 100%)',
      },
      backgroundSize: { 'grid': '48px 48px' },
      boxShadow: {
        'glow-diary':    '0 0 30px rgba(245,200,66,0.15)',
        'glow-pro':      '0 0 30px rgba(56,217,245,0.15)',
        'glow-research': '0 0 30px rgba(155,109,255,0.15)',
        'glow-green':    '0 0 30px rgba(57,229,160,0.15)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config
