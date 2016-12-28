const path = require('path');

const PATHS = {
  SOURCE: path.resolve(process.cwd(), 'src'),
  NODE_MODULES: path.resolve(process.cwd(), 'node_modules'),
  DIST: path.resolve(process.cwd(), 'dist')
};

module.exports = {
  plugins: [
    // your custom plugins
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel']
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css?modules', 'postcss']
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loaders: ['url']
      }
    ]
  },
  resolve: {
    modules: [PATHS.SOURCE, PATHS.NODE_MODULES, `${PATHS.SOURCE}/shared`],
    alias: {
      components: `${PATHS.SOURCE}/shared/components`,
      config: `${PATHS.SOURCE}/config/dev/index.js`,
      manifest: `${PATHS.DIST}/manifest.json`
    }
  }
};
