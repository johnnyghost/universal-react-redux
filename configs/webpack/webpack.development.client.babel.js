const path         = require('path');
const webpack      = require('webpack');
const commonConfig = require('./webpack.common.babel.js');
const PATHS        = require('./constants').PATHS;

const devClientConfig = {
  entry: [
    'babel-polyfill',
    path.resolve(PATHS.SOURCE, 'client/index.js'),
    path.resolve(PATHS.SOURCE, 'shared/assets/styles/style.css')
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
    new webpack.NoErrorsPlugin()
  ])
}

module.exports = Object.assign(commonConfig, devClientConfig);
