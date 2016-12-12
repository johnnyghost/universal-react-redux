import React from 'react';

type MainType = {
  children: Object
};

/**
 * <Main />
 * This component is the main component,
 * and responsible for render all the children components.
 * So all the common components, should be placed in here.
 *
 * @returns {JSXElement}
 */
const Main = ({children}:MainType):Object => {
  return (
    <div>
      <section>
        <h2>Main</h2>
      </section>
      { children }
    </div>
  );
}

export default Main;
