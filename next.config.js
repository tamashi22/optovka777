/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  sassOptions: {
    includePaths: ['./src'],
    prependData: `
        @import "~@/styles/common/temp.scss";`,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: 'preset-default',
                  params: {
                    overrides: {
                      cleanupIds: false,
                      removeViewBox: false,
                    },
                  },
                },
                'removeXMLNS',
              ],
            },
          },
        },
      ],
    });
    return config;
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'online-store-kv77.onrender.com',
        port: '',
        pathname: '/online-store/image/**',
      },
    ],
  },
};

module.exports = nextConfig;
