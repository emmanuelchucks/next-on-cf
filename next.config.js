/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ["https://next-on-cf-ck8.pages.dev"],
    },
  },
};

module.exports = nextConfig;
