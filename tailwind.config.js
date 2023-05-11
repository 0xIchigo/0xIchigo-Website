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
      "light-orange": "#FFD580",
      "grey": "#777777",
      "dark-green": "#2f4d0c",
      "light-green": "#b9d9b7",
    },
    extend: {
      cursor: {
        auto: "url(/public/zanpakuto.cur), auto",
      },
      fontFamily: {
        MSGothic: "MS Gothic",
        Aurebesh: "Aurebesh"
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
}
