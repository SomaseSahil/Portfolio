/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#050816',
        neon: '#31d6ff',
        violet: '#8b5cf6',
      },
      boxShadow: {
        glow: '0 0 50px rgba(49, 214, 255, 0.25)',
      },
    },
  },
  plugins: [],
};
