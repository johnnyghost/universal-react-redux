const path              = require('path');
const webpack           = require('webpack');
const commonConfig      = require('./../webpack.common.babel.js');
const PATHS             = require('./../constants').PATHS;

const devServerConfig = {
  target: 'node',
  entry: [
    path.resolve(PATHS.SOURCE, 'server/index.js')
  ],
  output: {
    path: PATHS.DIST,
    publicPath: '/',
    filename: 'server.js',
    libraryTarget: 'commonjs2'
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: commonConfig.plugins.concat([
    new webpack.NoErrorsPlugin()
  ])
}

module.exports = Object.assign(commonConfig, devServerConfig);
