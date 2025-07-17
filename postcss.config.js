// postcss.config.js
/** @type {import('postcss').Config} */
module.exports = {
  plugins: {
    // point at the new PostCSS plugin entry
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
}
