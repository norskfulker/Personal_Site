/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter Tight"', 'Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        serif: ['"Instrument Serif"', 'ui-serif', 'Georgia', 'serif'],
      },
      colors: {
        ink: '#0a1024',
        slate: '#5b6478',
        mist: '#f2f5fc',
        line: '#e3e8f3',
        navy: {
          950: '#030822',
          900: '#071340',
          800: '#0c1d5c',
          700: '#13287a',
        },
        royal: {
          DEFAULT: '#2450ff',
          600: '#1b3fe0',
          400: '#5b7cff',
          100: '#e5ebff',
        },
        aqua: '#3ee6c1',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      letterSpacing: {
        tightest: '-0.045em',
      },
    },
  },
  plugins: [],
};
