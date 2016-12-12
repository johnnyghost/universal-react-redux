import express from 'express';
import webpack from 'webpack';
import path from 'path';
import { ENV } from './configs';

const App = require('../dist/server');
const app = express();

if (ENV === 'dev') {
  const webpackDevConfig = require('../configs/webpack/client/webpack.config.development.babel');
  const compiler = webpack(webpackDevConfig);

  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    colors: true,
    progress: true,
    publicPath: webpackDevConfig.output.publicPath
  }));

  app.use(require('webpack-hot-middleware')(compiler));
}

app.use(express.static(path.join(__dirname, '..', 'dist')));

app.get('*', App.default);
app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), () => {
  console.log();
  console.log('================================');
  console.log('       Running the server       ');
  console.log(`       Environment: ${ENV}      `);
  console.log(`       Port: ${app.get('port')} `);
  console.log('================================');
})
