/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
       screens: {
        'xs': '480px', // Custom small devices breakpoint
        'sm': '425px',
        'md': '876px',
        'lg': '1092px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    }
  },
  plugins: [],
}