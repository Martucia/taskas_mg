/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://taskas-mg.onrender.com/:path*",
      },
    ];
  },
  images: {
    domains: ["variety.com"],
  },
};

module.exports = nextConfig;
