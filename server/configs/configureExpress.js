import path from 'path';
import express from 'express';
import gzip from 'compression';
import { ENV } from './../utils/environment';

const App = require('../../dist/server');

/**
 * Configure express.
 *
 * @method configureExpress
 * @param  {Object} app The express app
 */
const configureExpress = (app:Object) => {

  if (ENV === 'prod') {
    app.use(gzip());
  }

  app.set('port', (process.env.PORT || 3000));
  app.use(express.static(path.join(__dirname, '..', 'dist')));

  app.get('*', App.default);
}

export default configureExpress;
