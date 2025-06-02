import { Cinzel } from 'next/font/google';

/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors")

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary:'#0078ff',
      secondary: colors.sky[300]
      },
    },
    
  },
  plugins: [],
};
