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
          50: "#ff9380",
          100: "#ff8976",
          200: "#ff7f6c",
          300: "#ff7562",
          400: "#ff6b58",
          500: "#ff614e",
          600: "#f55744",
          700: "#eb4d3a",
          800: "#e14330",
          900: "#d73926",
        },
      },

      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.primary.800"),
            a: {
              color: theme("colors.secondary.600"),
              "text-decoration": "none",
              "&:hover, &.active": {
                "text-decoration": "underline",
              },
            },
            strong: {
              color: theme("colors.secondary.500"),
            },
            h1: {
              color: theme("colors.primary.800"),
              "margin-top": "0",
            },
            h2: {
              color: theme("colors.primary.800"),
              "margin-top": "0",
            },
            h3: {
              color: theme("colors.primary.800"),
              "margin-top": "0",
            },
            h4: {
              color: theme("colors.primary.800"),
              "margin-top": "0",
            },
            code: {
              color: "white",
              "background-color": theme("colors.primary.800"),
              "&:before, &:after": {
                display: "none",
              },
            },
            p: {
              color: theme("colors.primary.800"),
              "margin-top": "0",
              "margin-bottom": "1em",
            },
            img: {
              "margin-top": "0",
              "margin-bottom": "0",
              "box-shadow": "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
              "border-radius": "0.25rem",
            },
            "ul > li": {
              "&::before": {
                "background-color": theme("colors.primary.800"),
                "font-weight": "bold",
              },
            },
            "ol > li": {
              "&::before": {
                color: theme("colors.primary.800"),
                "font-weight": "bold",
              },
            },
          },
        },

        dark: {
          css: {
            color: "white",
            a: {
              color: theme("colors.secondary.500"),
              "text-decoration": "none",
              "&:hover, &.active": {
                "text-decoration": "underline",
              },
            },
            strong: {
              color: theme("colors.secondary.500"),
            },
            h1: {
              color: "white",
              "margin-top": "0",
            },
            h2: {
              color: "white",
              "margin-top": "0",
            },
            h3: {
              color: "white",
              "margin-top": "0",
            },
            h4: {
              color: "white",
              "margin-top": "0",
            },

            p: {
              color: "white",
              "margin-top": "0",
              "margin-bottom": "1em",
            },
            img: {
              "margin-top": "0",
              "margin-bottom": "0",
              "box-shadow": "0px 2px 4px -2px rgba(255, 255, 255, 30%)",
            },
            "ul > li": {
              "&::before": {
                "background-color": "white",
                "font-weight": "bold",
              },
            },
            "ol > li": {
              "&::before": {
                color: "white",
                "font-weight": "bold",
              },
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {
      typography: ["dark"],
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
};
