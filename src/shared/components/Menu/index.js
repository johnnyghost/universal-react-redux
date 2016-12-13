import React from 'react';
import { Link } from 'react-router';
import styles from './menu.css';

/**
 * <Menu />
 *
 * @return {JSXElement}
 */
const Menu = ():Object => {
  return (
    <ul className={styles.container}>
      <li><Link to={'/home'}>home</Link></li>
      <li><Link to={'/dashboard'}>dashboard</Link></li>
    </ul>
  )
}

export default Menu;
