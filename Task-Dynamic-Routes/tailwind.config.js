/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '200px',
      // => @media (min-width: 200px) { ... }

      'md': '600px',
      // => @media (min-width: 600px) { ... }

      'lg': '978px',
      // => @media (min-width: 978px) { ... }
    },
    extend: {},
  },
  plugins: [],
}