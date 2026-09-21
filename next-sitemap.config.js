// next-sitemap.config.js
// Single robots + sitemap source. Next 16 static export writes the public site to `dist/`.
module.exports = {
  siteUrl: 'https://sterflies.com',
  generateRobotsTxt: true,
  sourceDir: '.next',
  outDir: 'dist',
  exclude: [
    '/blog/10-places-to-visit-in-san-antonio',
    '/blog/the-growing-necessity-of-drone-integration',
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};
