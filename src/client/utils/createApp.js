import React from 'react';

/**
 * Create client app HOC.
 *
 * @returns {JSXElement}
 */
const createApp = ():Function => (WrappedComponent:Object):Object => {
  return <WrappedComponent />
}

export default createApp;
