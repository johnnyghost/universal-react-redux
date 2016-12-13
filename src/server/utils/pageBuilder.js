import manifest from 'manifest';

/**
 * Return all the files from the manifest
 * by type.
 *
 * @method getFileByType
 * @private
 *
 * @param {String} type The type of the file
 * @return {Array<String>} The scripts
 */
const getFileByType = (type:string):Array<string> => {
  return Object.keys(manifest).filter((key:string):boolean => {
    return key.split('.').pop() === type;
  });
}

/**
 * Create the script tags, for the page.
 *
 * @method createScriptTags
 * @private
 * @return {String}
 */
const createScriptTags = ():string => {
  const mapScripts = (key:string):string => {
    return `<script src="${manifest[key]}"></script>`;
  }

  return getFileByType('js')
    .map(mapScripts)
    .reverse()
    .join('');
};

/**
 * Create the style tags, for the page.
 *
 * @method createStyleTags
 * @private
 * @return {String}
 */
const createStyleTags = ():string => {
  const mapStyles = (key:string):string => {
    return `<link rel="stylesheet" href="${manifest[key]}">`;
  }

  return getFileByType('css')
    .map(mapStyles)
    .join('');
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
    <head>
      ${createStyleTags()}
    </head>
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
