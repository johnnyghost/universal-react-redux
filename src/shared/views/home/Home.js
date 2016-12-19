import React, { Component } from 'react';
import { document } from './constants';
import createPage from 'utils/pages';

/**
 * <Home />
 */
class Home extends Component {

  /**
   * Render <Home/>
   *
   * @return {JSXElement}
   */
  render():Object {

    return (
      <div>
        <section>
          <h2>Home</h2>
        </section>
      </div>
    );
  }
}

export default createPage(document)(Home);
