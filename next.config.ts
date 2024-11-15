import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Other Next.js config options
  eslint: {
    ignoreDuringBuilds: true, // Ignores ESLint errors during build
  },
  typescript: {
    ignoreBuildErrors: true, // Ignores TypeScript errors during build
  },
};

export default nextConfig;
