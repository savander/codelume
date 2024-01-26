const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',

  content: ["./src/**/*.{html,ts,vue}", "./index.html"],

  // Safelist all color classes
  // safelist: [
  //   {
  //     pattern: /(bg|text|border|ring|fill|stroke)-(red|green|blue|yellow|pink|purple|indigo|gray|black|white|current|transparent)-(\d{1,3}|[a-zA-Z]+)/,
  //     variants: ['hover', 'focus', 'active', 'group-hover', 'disabled'],
  //   },
  // ],

  theme: {
    extend: {
      fontFamily: {
        sans: ["FiraSans", ...defaultTheme.fontFamily.sans],
      },
    },
  },

  plugins: [],
};
