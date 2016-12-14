import React from 'react';
import { Menu } from 'components';
import styles from './header.css';

/**
 * <Header />
 *
 * @return {JSXElement}
 */
const Header = ():Object => {
  return (
    <header className={styles.container}>
      <nav className={styles.sidebar}>
        <Menu />
      </nav>
    </header>
  )
}

export default Header;
