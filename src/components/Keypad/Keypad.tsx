import React from 'react';
import './Keypad.css';

import Key from '../Key/Key';

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
  const operatorKeys = operators.map((operator) => (
    <p key={operator}>{operator}</p>
  ));

  return (
    <div className="keypad-container">
      <div className="numbers-container">{numberKeys}</div>
      <div className="operators-container">{operatorKeys}</div>
      <Key keyAction={callOperator} keyType="" keyValue="" />
    </div>
  );
};
export default Keypad;
