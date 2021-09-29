const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');
const commonConfig = require('./webpack.common');

const domain = process.env.MARKETING_DOMAIN;
// const Authdomain = process.env.AUTH_DOMAIN;

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        // marketing@http://localhost:8081/remoteEntry.js here products is the name given in products application webpack
        Marketing: `marketing@${domain}/remoteEntry.js`,
        // Auth: `auth@${Authdomain}/remoteEntry.js`,
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
