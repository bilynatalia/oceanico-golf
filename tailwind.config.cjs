/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'oceanico-green': '#2F4F2F',
        'oceanico-gold': '#B8860B',
        'oceanico-light': '#F5F5F0',
        'oceanico-dark': '#1a1a1a',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
