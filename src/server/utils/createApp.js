import React from 'react';

/**
 * Create server app HOC.
 *
 * @param {Object} props The props object
 * @returns {JSXElement}
 */
const createApp = (props:Object):Function => (WrappedComponent:Object):Object => {
  return <WrappedComponent {...props}/>
}

export default createApp;
