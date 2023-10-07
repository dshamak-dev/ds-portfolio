module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.html",
    "./src/**/*.tsx",
    "./src/**/*.css",
    "./src/**/*.{js,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#000000",
        grey_dark: "#23262D",
        grey_light: "#ABAEB5",
        highlight: "#30FEA8",
      },
    },
  },
  plugins: [],
};
