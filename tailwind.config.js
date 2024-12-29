/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    colors: {
      yellow: "#FFE100",
      "gray-dark": "#3D3D3D",
      gray: "#9F9F9F",
      black: "#000",
    },
    container: {
      padding: "0.625rem",
      center: true,
      screens: {
        "2xl": "1780px",
      },
    },
    fontFamily: {
      sans: ["ES Klarheit Kurrent", "sans-serif"],
    },
    extend: {
      screens: {
        desktop: "1300px",
      },
    },
  },
  plugins: [],
};
