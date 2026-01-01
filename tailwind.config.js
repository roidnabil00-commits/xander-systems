/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        primary: '#8b5cf6', // Violet Neon
        dark: '#050505',    // Hitam Pekat
        surface: '#0f0f0f', // Abu Gelap
        cardbg: '#121212',  // Background Kartu
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, #222 1px, transparent 1px), linear-gradient(to bottom, #222 1px, transparent 1px)",
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      }
    },
  },
  plugins: [],
}