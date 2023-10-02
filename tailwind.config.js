/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      
    },
    screens: {
      'sm': '640px',
      

      'md': '768px',
      

      'lg': '1133px',
      

      'xl': '1280px',
      

      '2xl': '1536px',
      
    },
  },
  plugins: [],
}
