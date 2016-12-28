import React from 'react';
import classNames from 'classnames/bind';
import { storiesOf } from '@kadira/storybook';
import { Header } from './../../src/shared/components';
import styles from './header.css'

const cx = classNames.bind(styles);

storiesOf('Header', module)
  .add('default', ():Object => (
    <Header />
  ))
  .add('with styles', ():Object => (
    <Header style={cx('header')}/>
  ));
