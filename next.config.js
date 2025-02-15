/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['avatars.githubusercontent.com', 'raw.githubusercontent.com'],
    unoptimized: true,
  },
  trailingSlash: false,
  output: 'export',
};

module.exports = nextConfig; 