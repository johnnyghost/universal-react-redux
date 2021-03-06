const webpack           = require('webpack');
const PATHS             = require('./constants').PATHS;
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || 'dev';

const env = {
  production: NODE_ENV === 'prod',
  staging: NODE_ENV === 'staging',
  test: NODE_ENV === 'test',
  development: NODE_ENV === 'dev'
};

module.exports = {
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].css',
      allChunks: true
    }),
    new webpack.DefinePlugin({
      __DEV__: env.development,
      __STAGING__: env.staging,
      __PRODUCTION__: env.production,
      __CURRENT_ENV__: '\'' + (NODE_ENV) + '\''
    }),
    new webpack.LoaderOptionsPlugin({
      test: /\.css$/,
      options: {
        postcss: () => [
          require('postcss-import')({
            addDependencyTo: webpack
          }),
          require('precss'),
          require('autoprefixer')
        ]
      }
    })
  ],
  resolve: {
    modules: [PATHS.SOURCE, PATHS.NODE_MODULES, `${PATHS.SOURCE}/shared`],
    alias: {
      config: `${PATHS.SOURCE}/shared/config/${NODE_ENV}/index.js`,
      manifest: `${PATHS.DIST}/manifest.json`
    }
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader?cacheDirectory', 'eslint-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff&prefix=fonts&name=app/assets/fonts/[name]-[hash:10].[ext]'
      }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream&prefix=fonts&name=app/assets/fonts/[name]-[hash:10].[ext]'
      }, {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/vnd.ms-fontobject&prefix=fonts&name=app/assets/fonts/[name]-[hash:10].[ext]'
      }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml&prefix=fonts&name=app/assets/svg/[name]-[hash:10].[ext]'
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=app/assets/png/[hash].[ext]',
          'image-webpack-loader?bypassOnDebug&interlaced=false'
        ]
      },
    ]
  }
};
