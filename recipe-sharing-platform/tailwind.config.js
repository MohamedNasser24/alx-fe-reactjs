/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Look for Tailwind classes in all JavaScript and TypeScript files within the src folder
    './public/index.html', // Also include the index.html file in the public directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

