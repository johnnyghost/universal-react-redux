import React, { Component } from 'react';
import Helmet from 'react-helmet';

/**
 * Document assets type
 * @type {Object}
 */
type DocumentAssetsType = {
  htmlAttributes: ?Object,
  title: ?string,
  base: ?Object,
  meta: ?Array<Object>,
  link: ?Array<Object>,
  script: ?Array<Object>,
  noscript: ?Array<Object>,
  style: ?Array<Object>
}

/**
 * Default values.
 * @type {Object}
 */
const defaultDocumentInfo = {
  title: 'Universal redux boilerplate',
  meta: [
    { property: 'og:site_name', content: 'Universal redux boilerplate' },
  ]
}

/**
 * Create a page HOC.
 *
 * @param {Object} documentAssets The document object
 * @returns {JSXElement}
 */
const createPage = (documentAssets:DocumentAssetsType):Function => (WrappedComponent:Object):Object => {
  return class extends Component {

    /**
     * [documentInfo description]
     * @method documentInfo
     * @return {[type]}     [description]
     */
    get documentInfo ():Object {
      return Object.assign({}, defaultDocumentInfo, documentAssets, {
        meta: documentAssets.meta && documentAssets.meta.concat(defaultDocumentInfo.meta) || defaultDocumentInfo.meta,
        link: documentAssets.link && documentAssets.link.concat(defaultDocumentInfo.link) || defaultDocumentInfo.link,
        script: documentAssets.script && documentAssets.script.concat(defaultDocumentInfo.script) || defaultDocumentInfo.script,
        noscript: documentAssets.noscript && documentAssets.noscript.concat(defaultDocumentInfo.noscript) || defaultDocumentInfo.noscript,
        style: documentAssets.style && documentAssets.style.concat(defaultDocumentInfo.style) || defaultDocumentInfo.style
      });
    }

    /**
     * Render the Enhanced page.
     *
     * @return {JSXElement}
     */
    render ():Object {
      return (
        <div>
          <Helmet {...this.documentInfo} />
          <WrappedComponent/>
        </div>
      )
    }
  }

}

export default createPage;
