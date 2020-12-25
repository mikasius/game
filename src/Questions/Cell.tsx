import React, { CSSProperties } from 'react';
import { Question } from '../store';

import Styles from './index.module.scss';

type OwnProps = {
  title?: string;
  question?: Question;
  style?: React.CSSProperties;
  onPress?: (question: Question) => void;
};

export const Cell = (props: OwnProps) => {
  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault();

    if (!props.question || !props.onPress) return;
    props.onPress(props.question);
  };

  const isViewedStyle: CSSProperties = {
    ...props.style,
    background: props.question?.isViewed ? '#cfe0e3' : '',
    borderColor: props.question?.isViewed ? '#1d2124' : '',
  };

  return (
    <div className={Styles.cell} style={isViewedStyle} onClick={handleClick}>
      {props.title || props.question?.price}
    </div>
  );
};
