/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['three'],
  images: {
    domains: [],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;