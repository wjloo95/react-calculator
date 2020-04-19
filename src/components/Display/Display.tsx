import React from 'react';

interface IProps {
  displayValue: string;
}

const Display = ({ displayValue }: IProps) => {
  return <div className="display-container"></div>;
};

export default Display;
