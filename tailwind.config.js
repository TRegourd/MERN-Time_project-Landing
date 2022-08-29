const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  important: true,
  theme: {
    screens: {
      xs: "540px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      Roboto: ['"Roboto", sans-serif'],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "12px",
        sm: "1rem",
        lg: "45px",
        xl: "5rem",
        "2xl": "13rem",
      },
    },
    extend: {
      screens: {
        lg_992: "992px",
      },
      colors: {
        dark: "#3c4858",
        black: "#161c2d",
        "black-900": "#1c2430",
        primary: {
          50: "#ecfaf8",
          100: "#c7f1e9",
          200: "#a2e8da",
          300: "#7ddfcb",
          400: "#57d6bd",
          500: "#01b1a5",
          600: "#01998e",
          700: "#01b1a5",
          800: "#175d4f",
          900: "#0e382f",
        },
      },

      fontSize: {
        "4xxl": [
          "2.5rem",
          {
            lineHeight: "2.25rem",
          },
        ],
      },

      spacing: {
        0.75: "0.1875rem",
        3.25: "0.8125rem",
      },

      height: ({ theme }) => ({
        10.5: "2.625rem",
        85: "21.25rem",
      }),
      width: ({ theme }) => ({
        10.5: "2.625rem",
      }),

      maxWidth: ({ theme, breakpoints }) => ({
        1200: "71.25rem",
        992: "60rem",
        768: "45rem",
      }),

      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        999: "999",
      },
    },
  },

  plugins: [
    // require('@tailwindcss/forms'), ({
    //     strategy: 'class',
    // }),
  ],
};
