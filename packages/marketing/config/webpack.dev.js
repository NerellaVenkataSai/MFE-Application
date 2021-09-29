const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');


const devConfig = {
  mode: 'development',
  output: {
    // adding publicPath in dev env to fetch main.js properly even in nested paths
    publicPath: 'http://localhost:8081/'
  },
  devServer: {
    port: 8081,
    // updating only publicPath is not sufficient to fetch main.js in nested routes like auth/sigin, we need make below changes as well
    historyApiFallback: true,
    // historyApiFallback: {
    //   index: '/index.html',
    // },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'marketing',
      filename: 'remoteEntry.js',
      exposes: {
        './marketingApp': './src/bootstrap',
      },
      shared: packageJson.dependencies,
    })
  ],
};

module.exports = merge(commonConfig, devConfig);
