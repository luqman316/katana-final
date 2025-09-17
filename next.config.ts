import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["katanaportfolio.s3.eu-north-1.amazonaws.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "up.yimg.com",
      },
    ],
  },
};

export default nextConfig;
