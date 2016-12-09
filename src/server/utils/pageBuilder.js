/**
 * Create the script tags, for the page.
 *
 * @method createScriptTags
 * @return {String}
 */
const createScriptTags = ():string => {
  return '<script src="client.js"></script>';
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

export {
  buildPage
}
