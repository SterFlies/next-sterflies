/**
 * Static export for GitHub Pages.
 * Next 16 compiles into `.next/` and writes the public site into `dist/`.
 * The GitHub Pages workflow uploads `./dist` only.
 *
 * Keep `distDir: 'dist'` so the Actions upload path stays stable.
 * Stop `next dev` before `npm run build` — both write to `dist/` and can collide.
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