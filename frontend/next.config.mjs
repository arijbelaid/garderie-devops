/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  output: 'standalone',
  cacheComponents: true,
  partialPrefetching: true,
  allowedDevOrigins: ['192.168.159.15'],
};

export default nextConfig;
