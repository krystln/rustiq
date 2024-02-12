/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{
      hostname: 'placehold.it',
      port: '',
      pathname: '/**',
    }],
  }
};

export default nextConfig;
