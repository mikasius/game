import React from 'react';
import Styles from './index.module.scss';

export const Header = () => {
  return (
    <header className={Styles.header}>
      <p className={Styles.title}>Svoya Igra</p>
    </header>
  );
};
