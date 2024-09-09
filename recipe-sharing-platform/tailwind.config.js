/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Paths to all files where Tailwind CSS classes might be used
    './public/index.html' // Include the index.html file in the public directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
