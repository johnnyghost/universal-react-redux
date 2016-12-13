import React from 'react';
import { Link } from 'react-router';

/**
 * <Menu />
 *
 * @return {JSXElement}
 */
const Menu = ():Object => {
  return (
    <ul>
      <li><Link to={'/home'}>home</Link></li>
      <li><Link to={'/dashboard'}>dashboard</Link></li>
    </ul>
  )
}

export default Menu;
