import React from 'react';

interface IProps {
  displayValue: string;
}

const Display = ({ displayValue }: IProps) => {
  return (
    <div className="display-container">
      <p className="display-value">{displayValue}</p>
    </div>
  );
};

export default Display;
