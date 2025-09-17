import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "katanaportfolio.s3.eu-north-1.amazonaws.com",
        pathname: "/projects/**",
      },
    ],
  },
};

export default nextConfig;
