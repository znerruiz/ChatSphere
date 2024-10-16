/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: "#161622",
        secondary: {
          DEFAULT: "#FF9C01",
          100: "#FF9001",
          200: "#FF8E01",
        },
        black: {
          DEFAULT: "#000",
          100: "#1E1E2D",
          200: "#232533",
        },
        gray: {
          100: "#CDCDE0",
        },
        lightpink: {
          100: "#FFB6C1",
        },
        mistyrose: {
          100: "#FFE4E1",
        }
      },
      fontFamily:{
      fsemibold:["Foldit-SemiBold","sans-serif"],
      fthin:["Foldit-Thin","sans-serif"],
      flight:["Foldit-Light","sans-serif"],
      fextralight:["Foldit-ExtraLight","sans-serif"],
      fregular:["Foldit-Regular","sans-serif"],
      fblack:["Foldit-Black","sans-serif"],
      fextrabold:["Foldit-ExtraBold","sans-serif"],
      fmedium:["Foldit-Medium","sans-serif"],
      }
    },
  },
  plugins: [],
}