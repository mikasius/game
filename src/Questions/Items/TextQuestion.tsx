import React from 'react';
import { Question } from '../../store';

import Styles from './index.module.scss';

type Props = {
  question: Question;
};

export const TextQuestion = (props: Props) => {
  return <p className={Styles.text}>{props.question.question}</p>;
};
