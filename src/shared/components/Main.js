import React, { Component } from 'react';

/**
 * <Main />
 */
class Main extends Component {


  /**
   * Render <Main/>
   *
   * @return {JSXElement}
   */
  render():Object {

    return (
      <div>
        <section>
          <h2>Main</h2>
        </section>
        { this.props.children }
      </div>
    );
  }
}

export default Main;
