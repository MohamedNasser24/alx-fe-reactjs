/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // Paths to all files using Tailwind classes
    "./public/index.html"          // Include HTML files if used
  ],
  darkMode: 'class', // or 'media' to enable dark mode based on user system preferences
  theme: {
    extend: {
      // Add custom theme settings here
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
    // Add Tailwind CSS plugins here if needed
  ],
};

