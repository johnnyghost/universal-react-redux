import React from 'react';
import { Provider } from 'react-redux';
import routes from 'routes';
import { Router, browserHistory } from 'react-router';
import configureStore from 'store/configureStore';

const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState);

/**
 * <Root />
 * The client entry point component.
 *
 * @return {JSXElement}
 */
const Root = ():Object => {
  
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        {routes}
      </Router>
    </Provider>
  )
}

export default Root;
