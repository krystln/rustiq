/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{
      hostname: 'via.placeholder.com',
      port: '',
      pathname: '/**',
    }, {
      hostname: 'lh3.googleusercontent.com',
      port: '',
      pathname: '/**',
    }]
  },
  async redirects() {
    return [];
  }
};

export default nextConfig;
