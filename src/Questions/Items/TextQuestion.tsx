import React from 'react';
import { Question } from '../../store';

type Props = {
  question: Question;
};

export const TextQuestion = (props: Props) => {
  return <p>{props.question.question}</p>;
};
