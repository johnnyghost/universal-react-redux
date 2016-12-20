const path              = require('path');
const webpack           = require('webpack');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
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
  module: {
    loaders: commonConfig.module.loaders.concat({
      test: /\.css$/,
      loader: 'css/locals?modules&importLoaders=1!postcss-loader'
    })
  },
  plugins: commonConfig.plugins.concat([
    new ProgressBarPlugin(),
    new webpack.NoErrorsPlugin()
  ])
}

module.exports = Object.assign(commonConfig, devServerConfig);
