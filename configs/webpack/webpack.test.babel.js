const webpack      = require('webpack');
const PATHS        = require('./constants').PATHS;
const commonConfig = require('./webpack.common.babel.js');

const testClientConfig = {
  devtool: 'inline-source-map',
  module: {
    noParse: [
      /node_modules(\\|\/)sinon/,
      /node_modules(\\|\/)acorn/,
    ],
    loaders: [
      {
        test: /\.json$/, loader: 'json-loader'
      },
      {
        test: /\.css$/, loader: 'null-loader'
      },
      {
        test: /sinon(\\|\/)pkg(\\|\/)sinon\.js/,
        loader: 'imports?define=>false,require=>false',
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: [/node_modules/],
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$/i,
        loader: 'null-loader',
      },
    ],
  },

  plugins: commonConfig.plugins.concat([
    // TODO: Check this
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    })
  ]),
  resolve: {
    modules: [PATHS.SOURCE, PATHS.NODE_MODULES, `${PATHS.SOURCE}/shared`],
    alias: {
      config: `${PATHS.SOURCE}/shared/config/dev/index.js`,
      manifest: `${PATHS.DIST}/manifest.json`,
      sinon: 'sinon/pkg/sinon'
    }
  },

  node: {
    fs: 'empty',
    child_process: 'empty',
    net: 'empty',
    tls: 'empty',
  },

  externals: {
    jsdom: 'window',
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': 'window',
  },
};

module.exports = Object.assign(commonConfig, testClientConfig);
