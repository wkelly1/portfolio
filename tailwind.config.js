module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        background: "#0F1223",
        main: "#4BFFC9",
      },
      greenColor: {
        main: "#4BFFC9",
      },
      fontFamily: {
        sans: ["'Rubik', sans-serif"],
        serif: ["'Rubik', sans-serif"],
        mono: ["'Rubik', sans-serif"],
        display: ["'Rubik', sans-serif"],
        body: ["'Rubik', sans-serif"],
      },
      gridAutoColumns: {
        "fr-min": "minmax(100px, 1fr)",
      },
    },
  },
  plugins: [],
};
