/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f3f8fa',
          100: '#deedf3',
          500: '#156b8a',
          700: '#114f67',
          900: '#0b2836',
        },
        accent: {
          500: '#0f766e',
        },
      },
      fontFamily: {
        heading: ['Manrope', 'Segoe UI', 'Tahoma', 'sans-serif'],
        body: ['Source Sans 3', 'Segoe UI', 'Tahoma', 'sans-serif'],
      },
      boxShadow: {
        card: '0 10px 35px rgba(11, 40, 54, 0.12)',
      },
    },
  },
  plugins: [],
};
