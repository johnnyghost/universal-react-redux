import React from 'react';
import routes from 'routes';
import { Router, browserHistory } from 'react-router';

/**
 * [createApp description]
 * @method createApp
 * @return {[type]}  [description]
 */
const createApp = ():Object => {
  return (
    <Router history={browserHistory}>
      {routes}
    </Router>
  )
}

export default createApp;
