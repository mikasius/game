import { Question } from '../../store';
import Styles from './index.module.scss';
import React from 'react';

type Props = {
  question: Question;
};

export const Answer = (props: Props) => {
  return <p className={Styles.text}>{props.question.answer}</p>;
};
