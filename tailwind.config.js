/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryblue: "#2BB8D6",
        jetPrimary: "#30323D",
        bgGrey: "#9A9A9A1A",
        rosepink: "#EA526F",
        mediumgreen: "#37B76C",
        spanishGray: "#9A9A9A",
      },
    },
    fontFamily: {
      pfont: ["Urbanist", "sans-serif"],
      sfont: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
