module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
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
      sm: "0.9rem",
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
    color: {
      white: "#fff",
      blue: "#0038FF",
      teal: "#16E3D8",
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
