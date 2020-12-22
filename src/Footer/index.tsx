import React from 'react';
import { Logo } from '../Logo';
import { FaHeart } from 'react-icons/fa';

import Styles from './index.module.scss';
import Colors from '../Logo/index.module.scss';

export const Footer = () => {
  return (
    <footer className={Styles.footer}>
      <p className={Styles.logo}>
        Made with &nbsp; <FaHeart className={Colors.red} /> &nbsp; in &nbsp;{' '}
        <Logo />!
      </p>
    </footer>
  );
};
