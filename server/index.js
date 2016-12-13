import express from 'express';
import { configureExpress, configureDevServer } from './configs';
import { ENV } from './utils/environment';
import listenCallback from './utils/listenCallback';

const app:Object = express();

if (ENV === 'dev') {
  /**
   * configure the dev server
   * with webpack configurations
   */
  configureDevServer(app);
}

/**
 * configure the express
 * settings
 */
configureExpress(app);

/**
 * bind and listen for
 * the connection
 */
app.listen(app.get('port'), listenCallback(app))
