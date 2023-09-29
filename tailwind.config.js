/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'primary-color': '#020107',
        'secondary-color':'#ffffff',
        'primary-blue':'#081f2e'
      },
    },
  },
  plugins: [],
}

