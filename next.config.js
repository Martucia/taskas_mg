/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://taskass.onrender.com/:path*",
      },
    ];
  },
  images: {
    domains: ["variety.com"],
  },
};

module.exports = nextConfig;
