import manifest from 'manifest';
import Helmet from 'react-helmet';

/**
 * Main files, that the page
 * needs to be rendered.
 * The value is the key of the manifest
 * file
 * @type {Object}
 */
const MAIN_FILES = {
  js: 'main.js',
  css: 'main.css'
}

/**
 * Get document info.
 *
 * @return {Object}
 */
const getDocumentInfo = ():Object => {
  return Helmet.rewind();
}

/**
 * Create the script tags, for the page.
 *
 * @method createMainScriptTag
 * @private
 * @return {String}
 */
const createMainScriptTag = ():string => {
  return `<script src="${manifest[MAIN_FILES.js]}"></script>`;
};

/**
 * Create the style tags, for the page.
 *
 * @method createMainStyleTag
 * @private
 * @return {String}
 */
const createMainStyleTag = ():string => {
  return `<link rel="stylesheet" href="${manifest[MAIN_FILES.css]}" />`;
};

/**
 * Build the html page.
 *
 * @method buildPage
 *
 * @param  {String} componentHTML The component
 * @return {String}
 */
const buildPage = (componentHTML:string):string => {
  const {
    title,
    meta,
    link,
    script
  } = getDocumentInfo();
  return `
  <!doctype html>
    <head>
      ${title.toString()}
      ${meta.toString()}
      ${link.toString()}
      ${createMainStyleTag()}
      <link href="https://fonts.googleapis.com/css?family=Work+Sans" rel="stylesheet" />
    </head>
    <body>
      <div id="root">
        <div>${componentHTML}</div>
      </div>
      ${createMainScriptTag()}
      ${script.toString()}
    </body>
  </html>`;
};

export {
  buildPage
}
