/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "'Lato', sans-serif",
      },
      colors: {
        dark1: "#333d29",
        dark2: "#414833",
        light1: "#a4ac86",
        light2: "#c2c5aa",
        darkaccent: "#936639",
        lightaccent: "#a68a64",
      },
    },
  },
  plugins: [],
};
