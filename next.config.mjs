/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  trailingSlash: true,

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.gstatic.com",
      },
    ],
  },
};

export default nextConfig;