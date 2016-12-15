import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router';
import styles from './menu.css';

const cx = classNames.bind(styles);

/**
 * <Menu />
 *
 * @return {JSXElement}
 */
const Menu = ():Object => {
  return (
    <ul className={cx('container')}>
      <li className={cx('item')}>
        <Link className={cx('link')} activeClassName={cx('activeLink')} to={'/home'}>Home</Link>
      </li>
      <li className={cx('item')}>
        <Link className={cx('link')} activeClassName={cx('activeLink')} to={'/dashboard'}>Dashboard</Link>
      </li>
    </ul>
  )
}

export default Menu;
