/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.html",
    "./src/**/*.js",
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    "./src/**/*.vue",
    "./src/**/*.jsx",
    // Add more content sources as needed
  ],
  // content: [],
  theme: {
    extend: {},
  },
  plugins: [],
};
