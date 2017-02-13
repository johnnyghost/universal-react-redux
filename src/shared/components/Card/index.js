import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.css';
const cx = classNames.bind(styles);
/**
 * Card Type
 * @type {Object}
 */
type CardType = {
  title: string,
  description: ?string
};

/**
 * <Card />
 *
 * @return {JSXElement}
 */
const Card = ({
  title,
  description
}:CardType):Object => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('title')}>{title}</div>
      <div className={cx('description')}>{description}</div>
    </div>
  )
}

export default Card;
