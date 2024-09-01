/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // Paths to your files where Tailwind CSS classes are used
    "./public/index.html"          // Include HTML files if needed
  ],
  darkMode: 'class', // or 'media' for system preference-based dark mode
  theme: {
    extend: {
      // Extend the default theme here
      colors: {
        customColor: '#ff5722',
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
      },
    },
  },
  plugins: [
    // Add any Tailwind CSS plugins here
  ],
};
