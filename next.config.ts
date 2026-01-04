import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/flow-arch",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
