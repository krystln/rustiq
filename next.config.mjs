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
    return [
      {
        source: '/auth/google',
        destination: process.env.GOOGLE_AUTH_URL,
        permanent: true,
      },
    ];
  }
};

export default nextConfig;
