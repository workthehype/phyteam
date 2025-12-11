/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Static export if you're using output export
  output: "export",

  images: {
    unoptimized: true,
    domains: [],
  },

  trailingSlash: true,

  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

module.exports = nextConfig;
