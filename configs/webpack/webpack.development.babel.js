const webpack           = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig            = require('./webpack.common.babel.js');

const devConfig = {
  entry: commonConfig.entry.concat([
    'webpack-dev-server/client?http://localhost:3000/',
    'webpack/hot/only-dev-server'
  ]),
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: 'dist',
    inline: true,
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

module.exports = Object.assign(commonConfig, devConfig);
