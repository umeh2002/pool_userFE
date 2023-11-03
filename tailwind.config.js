/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screen:{
        small:"768px",
        medium:"1440px"
      }
    },
  },
  plugins: [],
}

