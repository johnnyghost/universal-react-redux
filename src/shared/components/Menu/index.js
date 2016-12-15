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
      <li className={styles.item}>
        <Link className={styles.link} activeClassName={styles.activeLink} to={'/home'}>Home</Link>
      </li>
      <li className={styles.item}>
        <Link className={styles.link} activeClassName={styles.activeLink} to={'/dashboard'}>Dashboard</Link>
      </li>
    </ul>
  )
}

export default Menu;
