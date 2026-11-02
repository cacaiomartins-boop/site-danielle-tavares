/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sand: { 50: "#FBF8F3", 100: "#F5EFE6", 200: "#EADFCF" },
        forest: { 700: "#2E4A40", 800: "#233A32", 900: "#182A24" },
        clay: { 400: "#C98563", 500: "#B76F4D", 600: "#9C5A3B" },
        ink: "#2B2B28",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"DM Sans"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
