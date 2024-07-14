/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      primary: "#18181B",
      secondary: "#82A1AA",
      darkgrey: "#27272A",
      lightgrey: "#ccc",
      lightblue: "#E7F6FF",
      white: "#CCC",
      green: "#4CAF50",
      darkgreen: "#3E8E41",
    },
  },
};
