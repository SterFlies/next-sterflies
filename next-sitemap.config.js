// next-sitemap.config.js
// Next 16 static export compiles to `.next` and writes the public site to `dist/`
// (`distDir: 'dist'` in next.config.js). Generate the sitemap into the export output.
module.exports = {
  siteUrl: 'https://sterflies.com',
  generateRobotsTxt: true,
  sourceDir: '.next',
  outDir: 'dist',
};
