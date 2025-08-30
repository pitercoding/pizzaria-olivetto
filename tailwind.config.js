/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Cardo', 'serif'],           // títulos
        sans: ['Source Sans Pro', 'sans-serif'],  // corpo do texto
      },
    },
  },
  plugins: [],
}
