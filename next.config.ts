import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Static export for Vercel/any static host.
  output: 'export',
  images: {
    // `next/image` optimization requires a server, which a static export does
    // not have. Without this the export fails on any <Image> usage.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
