/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans", sans-serif'],
        test: ['Inter, sans-serif'],
      },
      colors: {
        primary: '#0052FF',
        surface: '#EEF0F3',
        state: '#F9FAFB',
      },
    },
  },
  plugins: [],
};
