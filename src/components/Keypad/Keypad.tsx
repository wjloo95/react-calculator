import React from 'react';

interface IProps {
  callOperator(): void;
  numbers: string[];
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
  const numberKeys = numbers.map((number) => <p key={number}>{number}</p>);
  return (
    <div className="keypad-container">
      <div className="numbers-container">{numberKeys}</div>
    </div>
  );
};
export default Keypad;
