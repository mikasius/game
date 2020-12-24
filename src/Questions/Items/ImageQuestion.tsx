import React from 'react';
import { Question } from '../../store';

import Styles from './index.module.scss';

type Props = {
  question: Question;
};

export const ImageQuestion = (props: Props) => {
  return (
    <div className={Styles.image}>
      <img src={props.question.question} alt={''} />
      <p>{props.question.description}</p>
    </div>
  );
};
