/**
 * Static export for GitHub Pages.
 * Next 16 compiles into `.next/` and writes the public site into `dist/`.
 * The GitHub Pages workflow uploads `./dist` only.
 *
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
};
 
module.exports = nextConfig