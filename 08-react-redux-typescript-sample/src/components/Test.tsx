import React from 'react';

interface TestProps {
  color: string;
}

export const Test = (props: TestProps): JSX.Element => {
  return <h2>{props.color}</h2>;
};
