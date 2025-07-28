/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.10minuteschool.com", "s3.ap-southeast-1.amazonaws.com"],
  },
  async headers() {
    return [
      {
        source: "/(.*)", // Applies to all routes
        headers: [
          {
            key: "X-TENMS-SOURCE-PLATFORM",
            value: "web",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
