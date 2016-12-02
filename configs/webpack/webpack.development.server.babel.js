const path              = require('path');
const webpack           = require('webpack');
const commonConfig      = require('./webpack.common.babel.js');
const PATHS             = require('./constants').PATHS;

const devServerConfig = {
  target: 'node',
  entry: [
    // 'babel-polyfill',
    path.resolve(PATHS.SOURCE, 'server.js'),
    // path.resolve(PATHS.SOURCE, 'assets/styles/style.css')
  ],
  output: {
    path: PATHS.DIST,
    publicPath: '/',
    filename: 'server.js',
    libraryTarget: 'commonjs2'
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: commonConfig.plugins.concat([
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ])
}

module.exports = Object.assign(commonConfig, devServerConfig);
