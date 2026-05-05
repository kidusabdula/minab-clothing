/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'systemagazine.wordpress.com',
          },
        ],
      },
};

export default nextConfig;
