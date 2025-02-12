/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'], // Permite importar SVGs como componentes React
    });
    return config;
  },
  images: {
    unoptimized: true,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
