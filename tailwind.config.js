module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        background: "#071030",
      },
      textColor: {
        main: "#071030",
      },
      fontFamily: {
        sans: ["'Source Code Pro', monospace"],
        serif: ["'Source Code Pro', monospace"],
        mono: ["'Source Code Pro', monospace"],
        display: ["'Source Code Pro', monospace"],
        body: ["'Source Code Pro', monospace"],
      },
      gridAutoColumns: {
        "fr-min": "minmax(100px, 1fr)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
