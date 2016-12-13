import path from 'path';
import express from 'express';
import gzip from 'compression';
import App from './../../dist/server';
import { ENV } from './../utils/environment';

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
  app.use(express.static(path.resolve(process.cwd(), 'dist')));

  app.get('*', App);
}

export default configureExpress;
