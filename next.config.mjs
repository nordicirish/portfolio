/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/_vercel/insights/script.js",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=15778476, stale-while-revalidate=15778476",
            // Max-age 6 months
          },
        ],
      },
    ];
  },
};

export default nextConfig;
