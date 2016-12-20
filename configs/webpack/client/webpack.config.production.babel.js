const path           = require('path');
const webpack        = require('webpack');
const ManifestPlugin = require('webpack-manifest-plugin');
const commonConfig   = require('./../webpack.common.babel.js');
const PATHS          = require('./../constants').PATHS;

const prodClientConfig = {
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
  devtool: 'source-map',

  plugins: commonConfig.plugins.concat([
    new webpack.NoErrorsPlugin(),
    new ManifestPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false
      },
      compress: {
        warnings: false,
        screw_ie8: true
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ])
}

module.exports = Object.assign(commonConfig, prodClientConfig);
