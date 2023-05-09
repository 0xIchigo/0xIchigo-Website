/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      "black": "#000000",
      "white": "#FFFFFF",
      "orange": "#FF6700",
    },
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
}
