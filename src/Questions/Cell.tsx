import React, { ReactNode } from 'react';
import { Question } from '../store';

import Styles from './index.module.scss';

type OwnProps = {
  question: Question;
  onPress: (id: string) => void;

  children?: ReactNode;
  style?: any;
};

export const Cell = (props: OwnProps) => {
  return (
    <div
      className={Styles.cell}
      style={props.style}
      onClick={(event) => props.onPress(props.question.category)}
    >
      {props.question.price}
      {props.children}
    </div>
  );
};
