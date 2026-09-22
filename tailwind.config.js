/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        espresso: "#0B1320",
        brown: "#233044",
        olive: "#164E63",
        sage: "#2DD4BF",
        beige: "#B9D8E5",
        cream: "#F5F8FA",
        terracotta: "#FF6B5F",
        gold: "#F5C76B",
      },
      fontFamily: {
        display: ["\"Playfair Display\"", "serif"],
        body: ["\"Manrope\"", "sans-serif"],
      },
    },
  },
  plugins: [],
};
