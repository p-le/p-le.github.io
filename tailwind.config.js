module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      montserrat: ["Montserrat, sans-serif"],
      rammetto: ["Rammetto One, cursive"],
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/aspect-ratio")],
}
