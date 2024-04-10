const { join } = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: config => {
    const fileLoaderRule = config.module.rules.find(rule =>
      rule.test?.test?.('.svg'),
    );

    fileLoaderRule.exclude = /\.svg$/i;

    config.module.rules.push({
      test: /\.svg$/,
      include: join(__dirname, 'assets', 'icons'),
      use: [
        {
          loader: 'svg-sprite-loader',
          // options: {
          //   spriteModule: require.resolve(
          //     '../../node_modules/svg-sprite-loader/runtime/browser-sprite.build',
          //   ),
          //   symbolModule: require.resolve(
          //     '../../node_modules/svg-baker-runtime/browser-symbol.js',
          //   ),
          //   runtimeGenerator: require.resolve(
          //     '../../node_modules/svg-sprite-loader/lib/runtime-generator.js',
          //   ),
          // },
        },
        'svgo-loader',
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
