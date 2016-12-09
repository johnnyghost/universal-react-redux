import React from 'react';
import { renderToString } from 'react-dom/server';
import Root from 'components/Root';
import { buildPage } from './utils/pageBuilder';

/**
 * Render.
 *
 * @param {Object} request The request object
 * @param {Object} response The reponse object
 */
export default function (request:Object, response:Object) {

  const component = renderToString(<Root />);
  const html = buildPage(component)

  response.send(html);
}
