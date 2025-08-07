/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}', // App Router
    './src/pages/**/*.{js,ts,jsx,tsx}', // Pages Router (if any)
    './src/components/**/*.{js,ts,jsx,tsx}' // Shared components
  ],
  theme: {
    extend: {}
  },
  plugins: []
};
