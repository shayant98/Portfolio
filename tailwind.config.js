module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./modules/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        navy: {
          light: "#233554",
          lightest: "#112240",
          normal: "#0a192f",
          dark: "#020c1b",
        },
      },
    },
    fontFamily: {
      sans: "Nunito, San Francisco, sans-serif",
      mono: "Ubuntu Mono, San Francisco, sans-serif",
    },
    filter: {
      // defaults to {}
      none: "none",
      grayscale: "grayscale(1)",
      invert: "invert(1)",
      sepia: "sepia(1)",
    },
    backdropFilter: {
      // defaults to {}
      none: "none",
      blur: "blur(20px)",
    },
  },
  variants: {
    extend: {
      textColor: ["responsive", "hover", "focus"],
    },
    filter: ["responsive", "hover"], // defaults to ['responsive']
    backdropFilter: ["responsive", "hover"], // defaults to ['responsive']
  },
  plugins: [
    require("tailwindcss-filters"),
    require("tailwindcss-scrollbar"),
    require("tailwindcss-writing-mode")({
      variants: ["responsive", "hover"],
    }),
  ],
};
