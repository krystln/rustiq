/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{
      hostname: 'via.placeholder.com',
      port: '',
      pathname: '/**',
    }],
  }
};

export default nextConfig;
