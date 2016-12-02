import express from 'express';
import webpack from 'webpack';
import path from 'path';
import { ENV } from './configs';

const App = require('../dist/server');
const app = express();

if (ENV === 'development') {
  const webpackDevConfig = require('../configs/webpack/webpack.development.server.babel');
  const compiler = webpack(webpackDevConfig);

  app.use(require('webpack-dev-middleware')(compiler, {
    contentBase: 'dist',
    quiet: true,
    noInfo: true,
    hot: true,
    inline: true,
    lazy: false,
    publicPath: webpackDevConfig.output.publicPath,
    headers: {'Access-Control-Allow-Origin': '*'},
    stats: {colors: true}
  }));

  app.use(require('webpack-hot-middleware')(compiler));
}
app.use(express.static(path.join(__dirname, '..', 'dist')));

app.get('*', App.default);

app.listen(3000, () => {
  console.log('-> run ');
})
