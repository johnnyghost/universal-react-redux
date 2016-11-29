const path = require('path');
const webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV || 'dev';

const PATHS = {
  SOURCE: path.resolve(process.cwd(), 'src'),
  NODE_MODULES: path.resolve(process.cwd(), 'node_modules'),
  DIST: path.resolve(process.cwd(), 'dist')
};

const env = {
  production: NODE_ENV === 'prod',
  staging: NODE_ENV === 'staging',
  test: NODE_ENV === 'test',
  development: NODE_ENV === 'dev'
};

module.exports = {
  entry: [
    'babel-polyfill',
    path.resolve(PATHS.SOURCE, 'client.js'),
    path.resolve(PATHS.SOURCE, 'assets/styles/style.css')
  ],

  output: {
    path: PATHS.DIST,
    filename: 'bundle.js'
  },

  plugins: [
    new webpack.DefinePlugin({
      __DEV__: env.development,
      __STAGING__: env.staging,
      __PRODUCTION__: env.production,
      __CURRENT_ENV__: '\'' + (NODE_ENV) + '\''
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          require('postcss-import')({
            addDependencyTo: webpack,
            prefix: '_'
          }),
          require('precss'),
          require('autoprefixer')
        ]
      }
    }),
  ],
  resolve: {
    modules: [PATHS.SOURCE, PATHS.NODE_MODULES],
    alias: {
      config: `${PATHS.SOURCE}/config/config.${NODE_ENV}.js`
    }
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules&importLoaders=1!postcss-loader'
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff&prefix=fonts&name=app/assets/fonts/[name]-[hash:10].[ext]'
      }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream&prefix=fonts&name=app/assets/fonts/[name]-[hash:10].[ext]'
      }, {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/vnd.ms-fontobject&prefix=fonts&name=app/assets/fonts/[name]-[hash:10].[ext]'
      }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml&prefix=fonts&name=app/assets/svg/[name]-[hash:10].[ext]'
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=app/assets/png/[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      },
    ]
  }
};
