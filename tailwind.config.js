/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        medium: { max: "1440px" },
        small: { max: "768px" },
      },
    },
  },
  plugins: [],
}

