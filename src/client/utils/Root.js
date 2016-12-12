import React from 'react';
import routes from 'routes';
import { Router, browserHistory } from 'react-router';

/**
 * <Root />
 * The client entry point component.
 * 
 * @return {JSXElement}
 */
const Root = ():Object => {
  return (
    <Router history={browserHistory}>
      {routes}
    </Router>
  )
}

export default Root;
