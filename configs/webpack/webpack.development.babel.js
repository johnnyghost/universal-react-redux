const webpack           = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config            = require('./webpack.common.babel.js');

config.entry = config.entry.concat([
  'webpack-dev-server/client?http://localhost:3000/',
  'webpack/hot/only-dev-server'
]);

config.devtool = 'cheap-module-eval-source-map';

config.devServer = {
  contentBase: 'dist',
  inline: true,
  port: 3000,
  colors: true,
  historyApiFallback: {
    index: '/dist/'
  }
};

config.plugins = config.plugins.concat([
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new HtmlWebpackPlugin({
    inject: true,
    template: 'public/index.html'
  })
]);

// config.module = Object.assign({}, config.module, {
//   preLoaders: [
//     {
//       test: /\.jsx?$/,
//       loaders: ['babel-loader', 'eslint'],
//       exclude: /node_modules/
//     }
//   ]
// });

module.exports = config;
