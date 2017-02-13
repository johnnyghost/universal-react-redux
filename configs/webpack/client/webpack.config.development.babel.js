const path              = require('path');
const webpack           = require('webpack');
const ManifestPlugin    = require('webpack-manifest-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const commonConfig      = require('./../webpack.common.babel.js');
const PATHS             = require('./../constants').PATHS;

const devClientConfig = {
  entry: [
    'babel-polyfill',
    path.resolve(PATHS.SOURCE, 'client/index.js'),
    path.resolve(PATHS.SOURCE, 'shared/assets/styles/style.css')
  ],
  output: {
    path: PATHS.DIST,
    filename: '[name].js'
  },
  devtool: 'eval-source-map',
  module: {
    loaders: commonConfig.module.loaders.concat({
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({
        fallbackLoader: 'style-loader',
        loader: ['css-loader?modules&importLoaders=1', 'postcss-loader']
      })
    })
  },
  plugins: commonConfig.plugins.concat([
    new ExtractTextPlugin({ filename: '[name].css', allChunks: true }),
    new ProgressBarPlugin(),
    new ManifestPlugin()
  ])
}

module.exports = Object.assign(commonConfig, devClientConfig);
