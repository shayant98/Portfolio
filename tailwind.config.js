module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        navy: {
          light: "#233554",
          lightest: "#112240",
          normal: "#0a192f",
          dark: "#020c1b;",
        },
      },
    },
    fontFamily: {
      sans: "Nunito, San Francisco, sans-serif",
      mono: "Ubuntu Mono, San Francisco, sans-serif",
    },
  },
  variants: {
    extend: {
      textColor: ["responsive", "hover", "focus"],
    },
  },
  plugins: [
    require("feather-icons"),
    require("tailwindcss-writing-mode")({
      variants: ["responsive", "hover"],
    }),
  ],
};
