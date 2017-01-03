import React from 'react';

/**
 * Create server app HOC.
 *
 * @param {Object} props The props object
 * @param {Object} store The store object
 * @returns {JSXElement}
 */
const createApp = (props:Object, store:Object):Function => (WrappedComponent:Object):Object => {
  return (
    <WrappedComponent
      {...props}
      store={store}
    />
  )
}

export default createApp;
