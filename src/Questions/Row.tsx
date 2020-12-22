import React, { ReactNode } from 'react';

export const Row = (props: {children: ReactNode}) => {
  return (
    <div>
      {props.children}
    </div>
  );
};
