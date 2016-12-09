const path                = require('path');
const webpack             = require('webpack');
const ManifestPlugin      = require('webpack-manifest-plugin');
const ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');
const commonConfig        = require('./../webpack.common.babel.js');
const PATHS               = require('./../constants').PATHS;

const devClientConfig = {
  entry: [
    'babel-polyfill',
    path.resolve(PATHS.SOURCE, 'client/index.js'),
    path.resolve(PATHS.SOURCE, 'shared/assets/styles/style.css')
  ],
  output: {
    path: PATHS.DIST,
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js'
  },
  devtool: 'cheap-module-eval-source-map',

  plugins: commonConfig.plugins.concat([
    new webpack.NoErrorsPlugin(),
    new ManifestPlugin(),
    new ChunkManifestPlugin({
      filename: 'chunk-manifest.json',
      manifestVariable: 'webpackManifest'
    }),
  ])
}

module.exports = Object.assign(commonConfig, devClientConfig);
