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
        blue_dark: "#1D2127",
        white: "#FFFFFF",
        grey_light: "#9B9DA0",
        yellow: "#CC9F1F",
      },
    },
  },
  plugins: [],
};
