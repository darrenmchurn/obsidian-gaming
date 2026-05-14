/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: '/obsidian-gaming',
  assetPrefix: '/obsidian-gaming',
}

export default nextConfig
