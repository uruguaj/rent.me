/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  extend: {
    zIndex:{
      '999' : '100',
    },
    height: {
      '128': '3rem',
    }
  }
};
