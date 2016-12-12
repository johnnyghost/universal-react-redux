import React, { Component } from 'react';

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
        { this.props.children }
      </div>
    );
  }
}

export default Dashboard;
