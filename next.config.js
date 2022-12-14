/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  rewrites: async () => [],
  redirects: async () => [],

  // experimental: {
  // https://github.com/vercel/next.js/pull/22867
  // externalDir: false,
  // },
};

module.exports = nextConfig;
