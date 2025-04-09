import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        passionOne: ['Passion One', 'sans-serif'],
      },
      colors: {
        colors: {
          "green-dark": 'var(--GREEN_DARK)',
          "green-light": 'var(--GREEN_LIGHT)',
          white: 'var(--WHITE)',
          black: 'var(--BLACK)',
          grey: 'var(--GREY)'
        },
      }
    },
  },
  plugins: [],
};
export default config;
