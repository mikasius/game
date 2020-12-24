import React from 'react';
import { Question } from '../../store';

import Styles from './index.module.scss';

type Props = {
  question: Question;
};

export const AudioQuestion = (props: Props) => {
  return (
    <div className={Styles.audio}>
      <audio controls>
        <source src={props.question.question} type={'audio/mpeg'} />
      </audio>
      <p>{props.question.description}</p>
    </div>
  );
};
