import React from 'react';

interface IProps {
  callOperator(): void;
  numbers: number[];
  operators: string[];
  setOperator(): void;
  updateDisplay(): void;
}

const Keypad = ({
  callOperator,
  numbers,
  operators,
  setOperator,
  updateDisplay,
}: IProps) => {
  return <div className="keypad-container"></div>;
};
export default Keypad;
