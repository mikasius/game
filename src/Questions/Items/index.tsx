import React from 'react';
import { Question } from '../../store';
import { TextQuestion } from './TextQuestion';
import { AudioQuestion } from './AudioQuestion';
import { ImageQuestion } from './ImageQuestion';

type Props = {
  question: Question;
};

export const QuestionItem = (props: Props) => {
  switch (props.question.type) {
    case 'text':
      return <TextQuestion {...props} />;
    case 'audio':
      return <AudioQuestion {...props} />;
    case 'image':
      return <ImageQuestion {...props} />;
  }
};
