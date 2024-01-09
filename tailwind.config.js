const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',

  content: ["./src/**/*.{html,ts,vue}", "./index.html"],

  theme: {
    extend: {
      fontFamily: {
        sans: ["FiraSans", ...defaultTheme.fontFamily.sans],
      },
    },
  },

  plugins: [],
};
