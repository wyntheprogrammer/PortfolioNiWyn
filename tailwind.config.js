/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        '#63C5DA': '#63C5DA',
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      },
    },

  },
  plugins: [],
}