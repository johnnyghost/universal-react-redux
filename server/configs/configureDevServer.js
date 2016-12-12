import webpack from 'webpack';

/**
 * Configure dev server.
 *
 * @method configureDevServer
 * @param  {Object} app The express app
 */
const configureDevServer = (app:Object) => {
  const webpackDevConfig = require('../../configs/webpack/client/webpack.config.development.babel');
  const compiler = webpack(webpackDevConfig);

  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    colors: true,
    progress: true,
    publicPath: webpackDevConfig.output.publicPath
  }));

  app.use(require('webpack-hot-middleware')(compiler));
}

export default configureDevServer;
