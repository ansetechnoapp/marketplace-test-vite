/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#EBF5FF',
          100: '#E1EFFE',
          200: '#C3DDFD',
          300: '#A4CAFE',
          400: '#76A9FA',
          500: '#3F83F8',
          600: '#0066CC', // Primary
          700: '#1C64F2',
          800: '#1A56DB',
          900: '#1E429F',
        },
        green: {
          50: '#F3FAF7',
          100: '#DEF7EC',
          200: '#BCF0DA',
          300: '#84E1BC',
          400: '#31C48D',
          500: '#0E9F6E',
          600: '#34C759', // Secondary
          700: '#046C4E',
          800: '#03543F',
          900: '#014737',
        },
        orange: {
          50: '#FFF8F1',
          100: '#FEECDC',
          200: '#FCD9BD',
          300: '#FDBA8C',
          400: '#FF8A4C',
          500: '#FF5A1F',
          600: '#FF9500', // Accent
          700: '#C05621',
          800: '#9C4221',
          900: '#7B341E',
        },
      },
      boxShadow: {
        'inner-white': 'inset 0 1px 0 0 rgb(255 255 255 / 0.1)',
      },
      spacing: {
        '88': '22rem',
        '128': '32rem',
      },
      gridTemplateColumns: {
        'auto-fill-100': 'repeat(auto-fill, minmax(100px, 1fr))',
        'auto-fill-200': 'repeat(auto-fill, minmax(200px, 1fr))',
        'auto-fill-300': 'repeat(auto-fill, minmax(300px, 1fr))',
      },
    },
  },
  plugins: [],
};