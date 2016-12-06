import React from 'react';
import Root from 'components/Root';
import { renderToString } from 'react-dom/server';

/**
 * [createScriptTags description]
 * @method createScriptTags
 * @return {[type]}         [description]
 */
const createScriptTags = () => {
  return '<script src="client.js"></script>';
};

/**
 * [buildPage description]
 * @method buildPage
 * @param  {[type]}  componentHTML [description]
 * @return {[type]}                [description]
 */
const buildPage = (componentHTML) => {
  return `
  <!doctype html>
    <head></head>
    <body>
      <div id="root">
        <div>${componentHTML}<div>
      </div>
      ${createScriptTags()}
      </body>
    </html>`;
};

/**
 * Render.
 *
 * @param {Object}
 */
export default function (request, response) {

  const component = renderToString(<Root />);
  const html = buildPage(component)

  res.send(html);
}
