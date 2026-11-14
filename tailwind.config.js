/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          100: '#fff8df',
          200: '#f5e6b8',
          300: '#e8c96f',
          400: '#d6aa47',
          500: '#b8872f',
          600: '#8f641d',
          700: '#684713',
        },
        dark: {
          950: '#fffdf8',
          900: '#fffaf0',
          800: '#f7f0e2',
          700: '#eee4d2',
          600: '#dfd1b9',
          500: '#cbb99b',
          400: '#a89372',
        },
        spa: {
          ivory: '#faf9f6',
          cream: '#f5f0e8',
          sage: '#7c9a7a',
        }
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Montserrat', 'Inter', 'sans-serif'],
        sans: ['Montserrat', 'Inter', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      animation: {
        'marquee': 'marquee 22s linear infinite',
        'float': 'floatPulse 4s ease-in-out infinite',
        'gold-pulse': 'goldPulse 2s ease-in-out infinite',
        'shimmer': 'shimmerBtn 3s ease infinite',
        'slide-up': 'slideUp 0.4s ease-out forwards',
        'fade-in': 'fadeIn 0.3s ease-out forwards',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        floatPulse: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        goldPulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.6 },
        },
        shimmerBtn: {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      borderRadius: {
        'card': '16px',
        'pill': '999px',
      },
    },
  },
  plugins: [],
}
