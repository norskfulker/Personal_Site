/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        mono: ['"Geist Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      colors: {
        // Neutrals: Vercel-style black and white with one warm-grey step between.
        ink: '#0a0a0b',
        night: '#050507',
        coal: '#111115',
        paper: '#fafafa',
        fog: '#f0f0f2',
        line: '#e6e6ea',
        muted: '#6b6b76',
        // Accents: the energy. Lime is reserved for the call to action.
        violet: '#6d5cff',
        pink: '#ff4fb8',
        orange: '#ff7a1a',
        lime: '#c8ff2e',
        cyan: '#22d3ee',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      letterSpacing: {
        tightest: '-0.055em',
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(12%, 8%) scale(1.12)' },
          '66%': { transform: 'translate(-8%, 14%) scale(0.92)' },
        },
        shimmer: {
          to: { backgroundPosition: '200% center' },
        },
        marquee: {
          to: { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        shimmer: 'shimmer 6s linear infinite',
        marquee: 'marquee 40s linear infinite',
        'spin-slow': 'spin 16s linear infinite',
      },
    },
  },
  plugins: [],
};
