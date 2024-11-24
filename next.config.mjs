/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',  // Single hostname
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'unsplash.com',  // Second hostname as separate pattern
        port: '',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
