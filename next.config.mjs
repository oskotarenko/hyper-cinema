/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "", // TODO: move cloud name to env
        pathname: "/dsdppyibk/image/upload/**",
      },
    ],
  },
};

export default nextConfig;
