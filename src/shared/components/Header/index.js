import React from 'react';
import classNames from 'classnames/bind';
import { Menu } from 'components';
import styles from './header.css';

const cx = classNames.bind(styles);

type HeaderType = {
  style: string
}

/**
 * <Header />
 *
 * @param {Object} props The
 * @return {JSXElement}
 */
const Header = ({style}:HeaderType):Object => {
  return (
    <header className={cx(['container', style])}>
      <div className={cx('logo')}>logo</div>
      <nav className={cx('menu')}>
        <Menu />
      </nav>
    </header>
  )
}

export default Header;
