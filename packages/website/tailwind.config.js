module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
    },
    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            color: theme("colors.text"),
            "*": {
              color: theme("colors.text"),
            },
          },
        },
      }),
    },
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      lg: "1.5rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      serif: ["Roboto Mono", "sans-serif"],
      body: ["Roboto Mono", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
