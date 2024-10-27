/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: { emotion: true },
  images: { remotePatterns: [{ hostname: "avatars.githubusercontent.com" }] },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default nextConfig;
