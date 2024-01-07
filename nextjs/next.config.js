/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    esmExternals: "loose",
  },
  images: {
    domains: ["cdn.sanity.io", "images.unsplash.com", 'res.cloudinary.com'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
