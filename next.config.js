/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true, // Ensures faster builds & smaller JS
  experimental: {
    legacyBrowsers: false, // Avoids shipping unnecessary polyfills (IE11)
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(nextConfig);


