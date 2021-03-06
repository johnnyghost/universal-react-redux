const path         = require('path');
const webpack      = require('webpack');
const commonConfig = require('./../webpack.common.babel.js');
const PATHS        = require('./../constants').PATHS;

const prodConfig = {
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
  devtool: 'source-map',
  module: {
    loaders: commonConfig.module.loaders.concat({
      test: /\.css$/,
      loader: 'css-loader/locals?modules&importLoaders=1!postcss-loader'
    })
  },
  plugins: commonConfig.plugins.concat([
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      children: true,
      minChunks: 2,
      async: true,
    }),
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

module.exports = Object.assign(commonConfig, prodConfig);
