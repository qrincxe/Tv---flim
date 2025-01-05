/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    TMDB_API_KEY: process.env.adc48d20c0956934fb224de5c40bb85d,
  },
  images: {
    domains: ['image.tmdb.org'],
  },
};

module.exports = nextConfig;
