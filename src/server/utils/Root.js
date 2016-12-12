import React from 'react';
import { RouterContext } from 'react-router';

/**
 * <Root />
 * The server entry point component.
 *
 * @param  {Object} props The props object
 * @return {JSXElement}
 */
const Root = (props:Object):Object => {
  return <RouterContext {...props } />
}

export default Root;
