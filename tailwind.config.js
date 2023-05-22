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
      },
      typography: {
        DEFAULT: {
          css: {
            p: {
              minWidth: "100%",
              marginTop: "0.5rem"
            }
          }
        },
        lg: {
          css: {
            h1: {
              marginBottom: "0.5rem",
            },
            h2: {
              marginBottom: "0.5rem",
              marginTop: "1.5rem",
            },
            p: {
              marginBottom: "0.5rem",
              code: {
                backgroundColor: "#b9d9b7",
                paddingRight: "0.25rem",
                paddingLeft: "0.25rem",
                '&::before': {
                  content: '"" !important',
                },
                '&::after': {
                  content: '"" !important',
                },
              }
            },
            pre: {
              backgroundColor: "#b9d9b7",
              color: "#000000",
            },
          }
        }
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
}
