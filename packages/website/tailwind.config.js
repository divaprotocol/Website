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
      lg: "1.125rem",
      xl: "1.75rem",
      "2xl": "2.374rem",
      "3xl": "3rem",
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      serif: ["Roboto Mono", "sans-serif"],
      body: ["Roboto Mono", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
