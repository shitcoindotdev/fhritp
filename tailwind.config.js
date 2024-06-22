/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        'menu-button': 'rgba(240, 241, 242, 0.69)',
        'tesla-black': 'rgb(23, 26, 32)',
      },
      colors: {
        'tesla-black': 'rgb(23, 26, 32)',
        'tesla-gray': 'rgb(57, 60, 65)',
        'pump-green': 'rgb(134, 239, 172)',
        'pump-white': 'rgb(236, 239, 242)',
        'tesla-white': 'rgb(208, 209, 210)',
      }
    },
  },
  plugins: [],
};