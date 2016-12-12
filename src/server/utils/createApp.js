import React from 'react';
import { RouterContext } from 'react-router';

/**
 * [createApp description]
 * @method createApp
 * @param  {[type]}  props [description]
 * @return {[type]}        [description]
 */
const createApp = (props:?Object):Object => {
  return <RouterContext {...props} />
}

export default createApp;
