/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans", sans-serif'],
        text: ['Inter, sans-serif'],
      },
      colors: {
        primary: '#0052FF',
        surface: '#EEF0F3',
        state: '#F9FAFB',
        muted: '#6B7280',
      },
      borderRadius: {
        '4xl': '2.5rem',
        '5xl': '3rem',
      },
    },
  },
  plugins: [],
};
