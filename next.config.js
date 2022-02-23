/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    concurrentFeatures: true,
  },
  images: {
    domains: ["i.imgur.com"],
  },
};

module.exports = nextConfig;
