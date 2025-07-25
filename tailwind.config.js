/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-require-imports
const plugin = require("tailwindcss/plugin");

module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "focus-light": "0px 0px 0px 2px rgba(201, 201, 201, 0.9)",
      },
    },
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  plugins: [plugin(function ({ addUtilities }) {})],
};
