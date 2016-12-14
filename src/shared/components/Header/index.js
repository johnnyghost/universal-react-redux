import React from 'react';
import { Menu } from 'components';
import styles from './header.css';

/**
 * <Header />
 * @return {JSXElement}
 */
const Header = ():Object => {
  return (
    <header className={styles.container}>
      <div className={styles.logo}>logo</div>
      <nav className={styles.menu}>
        <Menu />
      </nav>
    </header>
  )
}

export default Header;
