import React from 'react';
import { RouterContext } from 'react-router';
import { Provider } from 'react-redux';

/**
 * <Root />
 * The server entry point component.
 *
 * @param  {Object} props The props object
 * @return {JSXElement}
 */
const Root = (props:Object):Object => {

  return (
    <Provider store={props.store}>
      <RouterContext {...props} />
    </Provider>
  );
}

export default Root;
