/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0a0a0a',
        secondary: '#525252',
        tertiary: '#737373',
        border: '#e5e5e5',
        accent: '#0a0a0a',
        codebg: '#fafafa',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      fontSize: {
        meta: ['13px', { lineHeight: '1.5' }],
      },
      maxWidth: {
        content: '1100px',
        prose: '680px',
      },
    },
  },
  plugins: [],
}
