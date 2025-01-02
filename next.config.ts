import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["media.cdn.adultswim.com", "rickandmortyapi.com"],
  },
  reactStrictMode: true,
};

export default nextConfig;
