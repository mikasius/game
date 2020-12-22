import React from 'react';

import Styles from './index.module.scss';

export const Logo = () => {
  return (
    <span>
      <b className={Styles.green}>M</b>
      <b className={Styles.yellow}>C</b>
      <b className={Styles.red}>C</b>
    </span>
  );
};
