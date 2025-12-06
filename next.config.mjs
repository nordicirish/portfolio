/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
    qualities: [70, 75, 95, 100],
  },
  async headers() {
    return [
      {
        source: "/_vercel/insights/script.js",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000",
            // Max-age 1 month
          },
        ],
      },
    ];
  },
};

export default nextConfig;
