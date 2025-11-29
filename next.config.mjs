/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // Izinkan domain Unsplash
      },
    ],
  },
};
export default nextConfig;
