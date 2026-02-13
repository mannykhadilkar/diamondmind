/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Softball field colors
        'field-grass': '#2d5a27',
        'field-dirt': '#c4a574',
        'field-base': '#ffffff',
        // UI accent colors
        'correct': '#22c55e',
        'incorrect': '#ef4444',
        'warning': '#f59e0b',
      },
    },
  },
  plugins: [],
}
