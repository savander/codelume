const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,ts,vue}"],

  theme: {
    extend: {
      fontFamily: {
        sans: ["FiraSans", ...defaultTheme.fontFamily.sans],
      },
    },
  },

  plugins: [],
};
