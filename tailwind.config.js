module.exports = {
  purge: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./modules/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
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
      sans: "Calibre,Inter,San Francisco,SF Pro Text,-apple-system,system-ui,sans-serif",
      mono: "SF Mono,Fira Code,Fira Mono,Roboto Mono,monospace",
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
    require("tailwindcss-scrollbar"),
    require("tailwindcss-writing-mode")({
      variants: ["responsive", "hover"],
    }),
  ],
};
