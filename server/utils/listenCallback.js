import { ENV } from './../utils/environment';

/**
 * Listen callback.
 *
 * @method listenCallback
 * @param  {Object} app The express app
 */
const listenCallback = (app:Object) => {
  console.log();
  console.log('================================');
  console.log('       Running the server       ');
  console.log(`       Environment: ${ENV}      `);
  console.log(`       Port: ${app.get('port')} `);
  console.log('================================');
}

export default listenCallback;
