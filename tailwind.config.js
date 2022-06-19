/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "input.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1px",
    },
    extend: {
      colors: {
        lawngreen: "#7cfc00",
        dark: "#0f172a",
        putih: "#64748b",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
