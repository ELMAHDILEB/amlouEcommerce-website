// tailwind.config.js
import "./index.css"
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--primary)",
        },
        blackColor: {
          colorBlack: "var(--blackColor)"
        },
        colorBody: {
          colorBody: "var(--colorBody)"
        },
    
      },
    },
  },
  plugins: [],
}