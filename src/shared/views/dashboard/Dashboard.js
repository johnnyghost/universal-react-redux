import React, { Component } from 'react';
import { document } from './constants';

import createPage from 'utils/pages';

/**
 * <Dashboard />
 */
class Dashboard extends Component {


  /**
   * Render <Dashboard/>
   *
   * @return {JSXElement}
   */
  render():Object {

    return (
      <div>
        <section>
          <h2>Dashboard</h2>
        </section>
      </div>
    );
  }
}

export default createPage(document)(Dashboard);
