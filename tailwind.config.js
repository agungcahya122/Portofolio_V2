/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js}",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        greenLight: "#01C38D",
        blueDark: "#132D46",
        white: "#FFFFFF",
        dark: "#191E29",
        army: "#597B6A",
        gray: "#696E79",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [],
  },
};
