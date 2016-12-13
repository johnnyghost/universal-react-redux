import manifest from 'manifest';

/**
 * Create the script tags, for the page.
 *
 * @method createScriptTags
 * @return {String}
 */
const createScriptTags = ():Array => {
  return Object.keys(manifest).map((key:string):string => {
    return `<script src=${manifest[key]}></script>`;
  }).reverse();
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
      ${createScriptTags().join('')}
      </body>
    </html>`;
};

export {
  buildPage
}
