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
      <Menu />
    </header>
  )
}

export default Header;
