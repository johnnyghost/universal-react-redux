import React, { Component } from 'react';
import { ReposListContainer } from 'containers';
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
          <ReposListContainer />
        </section>
      </div>
    );
  }
}

export default createPage(document)(Home);
