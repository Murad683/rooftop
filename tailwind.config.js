/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryBg: '#1A1A1A',
        lightBg: '#F7F5EF',
        cardBg: '#FFFFFF',
        textMain: '#1A1A1A',
        textMuted: '#767676',
        accentGold: '#D4BA7E',
        accentRed: '#755D34',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 45px rgba(0,0,0,0.06)',
      },
    },
  },
  plugins: [],
}
