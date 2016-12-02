const path              = require('path');
const webpack           = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig      = require('./webpack.common.babel.js');
const PATHS             = require('./constants').PATHS;

const devClientConfig = {
  entry: [
    'babel-polyfill',
    path.resolve(PATHS.SOURCE, 'client.js'),
    path.resolve(PATHS.SOURCE, 'assets/styles/style.css'),
    'webpack-dev-server/client?http://localhost:3000/',
    'webpack/hot/only-dev-server'
  ],
  output: {
    path: PATHS.DIST,
    filename: 'client.js'
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: 'dist',
    inline: false,
    port: 3000,
    colors: true,
    historyApiFallback: {
      index: '/dist/'
    }
  },
  plugins: commonConfig.plugins.concat([
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: 'public/index.html'
    })
  ])
}

module.exports = Object.assign(commonConfig, devClientConfig);
