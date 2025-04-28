module.exports = {
  darkMode:"class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        blackColor: "var(--blackColor)",
        colorBody: "var(--colorBody)",
      },
    },
  },
  plugins: [],
}