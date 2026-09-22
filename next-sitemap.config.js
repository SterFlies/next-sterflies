// next-sitemap.config.js
// Single robots + sitemap source. Next 16 static export writes the public site to `dist/`.
module.exports = {
  siteUrl: 'https://sterflies.com',
  generateRobotsTxt: true,
  sourceDir: '.next',
  outDir: 'dist',
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};
