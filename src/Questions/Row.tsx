import React, { ReactNode } from 'react';
import Styles from './index.module.scss';

type OwnProps = {
  children: ReactNode;
};

export const Row = (props: OwnProps) => {
  return <div className={Styles.row}>{props.children}</div>;
};
