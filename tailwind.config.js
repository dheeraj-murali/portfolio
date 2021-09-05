module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f5f5f6",
          100: "#eaebec",
          200: "#cbcdd0",
          300: "#acafb3",
          400: "#6e747a",
          500: "#303841",
          600: "#2b323b",
          700: "#242a31",
          800: "#1d2227",
          900: "#181b20",
        },
        secondary: {
          50: "#fffcf7",
          100: "#fff8ef",
          200: "#feeed6",
          300: "#fde3bd",
          400: "#fcce8c",
          500: "#fab95b",
          600: "#e1a752",
          700: "#bc8b44",
          800: "#966f37",
          900: "#7b5b2d",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
