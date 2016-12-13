import React from 'react';
import { Menu } from 'components';

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
      <Menu />
      <section> { children } </section>
    </div>
  );
}

export default Main;
