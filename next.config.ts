import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  
  // Performance optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // React strict mode for better development experience
  reactStrictMode: true,
  
  // Enable experimental features
  experimental: {
    optimizePackageImports: ['framer-motion', '@mdx-js/react'],
  },
};

export default nextConfig;
