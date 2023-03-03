/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  colors: {
    primary: 'rgb(var(--color-primary) / <alpha-value>)',
    secondary: 'rgb(var(--color-secondary) / <alpha-value>)'
  },
  theme: {
    extend: {},
  },
  plugins: [],
}
