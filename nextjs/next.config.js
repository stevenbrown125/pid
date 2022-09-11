/** @type {import('next').NextConfig} */

const withTM = require('next-transpile-modules')([
  '@square/web-sdk',
  'react-square-web-payments-sdk'
])

const nextConfig = withTM({
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    esmExternals: 'loose'
  },
  images: {
    domains: ['cdn.sanity.io', 'images.unsplash.com']
  }
})

module.exports = nextConfig
