/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#735943",
        tertiary50: "#2B7BBD",
        neutral98: "#FFF8F5",
        neutral40: "#655D58",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      // fontSize: {
      //   sm: "0.8rem",
      //   base: "1rem",
      //   xl: "1.25rem",
      //   "2xl": "1.563rem",
      //   "3xl": "1.953rem",
      //   "4xl": "2.441rem",
      //   "5xl": "3.052rem",
      // },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
    },
  },
  plugins: [],
};
