const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "2xs": "320px",
      xs: "400px",
      ...defaultTheme.screens,
    },
    fontFamily: {
      headings: ["DM Sans", "sans-serif"],
      body: ["Caudex", "serif"],
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar"),
    // ...
  ],
};
