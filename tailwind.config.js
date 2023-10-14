/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#00A3E1",
        background: "#292929",
        container: "#3C3C3C",

        'primary-text': "#FFFFFF",
        'secondary-text': "#BFBFBF"
      }
    },
  },
  plugins: [],
}

