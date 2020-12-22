import React from 'react';
import { Question } from './index';

import Styles from './index.module.scss';

type OwnProps = {
  question: Question;
  onPress: (id: string) => void;
};

export const Cell = (props: OwnProps) => {
  return (
    <div
      className={Styles.cell}
      onClick={(event) => props.onPress(props.question.id)}
    >
      {props.question.price}
    </div>
  );
};
