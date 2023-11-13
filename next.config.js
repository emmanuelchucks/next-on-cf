/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ["next-on-cf-ck8.pages.dev"],
    },
  },
};

module.exports = nextConfig;
