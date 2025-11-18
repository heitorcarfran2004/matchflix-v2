import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  devIndicators: {
    allowedDevOrigins: [
      "https://6000-firebase-matchflix-backup-2-1763077433968.cluster-r7kbxfo3fnev2vskbkhhphetq6.cloudworkstations.dev"
    ]
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://matchflix-backend.vercel.app/api/:path*',
      },
    ]
  },
};

export default nextConfig;
