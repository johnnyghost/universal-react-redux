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
 * Create a page HOC.
 *
 * @param {Object} documentAssets The document object
 * @returns {JSXElement}
 */
const createPage = (documentAssets:DocumentAssetsType):Function => (WrappedComponent:Object):Object => {
  return class extends Component {

    /**
     * Render the Enhanced page.
     *
     * @return {JSXElement}
     */
    render ():Object {
      return (
        <div>
          <Helmet {...documentAssets} />
          <WrappedComponent/>
        </div>
      )
    }
  }

}

export default createPage;
