/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Removed: swcMinify (no longer supported in Next 13+)

  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  images: {
    domains: [],
  },
};

module.exports = nextConfig;
