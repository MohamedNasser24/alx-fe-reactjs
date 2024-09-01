module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"], // Scans these files for Tailwind classes
  darkMode: 'class', // Enable dark mode with a class (use 'media' for system preference)
  theme: {
    extend: {}, // Extend default theme (add custom styles here)
  },
  plugins: [], // Add Tailwind plugins here if needed
};