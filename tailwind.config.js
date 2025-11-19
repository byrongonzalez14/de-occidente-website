/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "p-rrafo-deoccidente": "var(--p-rrafo-deoccidente-font-family)",
        "subt-tulo-deoccidente": "var(--subt-tulo-deoccidente-font-family)",
        "subt-tulo-rutas-deoccidente":
          "var(--subt-tulo-rutas-deoccidente-font-family)",
      },
    },
  },
  plugins: [],
};
