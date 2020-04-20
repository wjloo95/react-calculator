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
  const numberKeys = numbers.map((number) => (
    <Key
      key={number}
      keyAction={updateDisplay}
      keyType="number-key"
      keyValue={number}
    />
  ));
  const operatorKeys = operators.map((operator) => (
    <Key
      key={operator}
      keyAction={setOperator}
      keyType="operator-key"
      keyValue={operator}
    />
  ));

  return (
    <div className="keypad-container">
      <div className="numbers-container">{numberKeys}</div>
      <div className="operators-container">{operatorKeys}</div>
      <div className="submit-container">
        <Key keyAction={callOperator} keyType="submit-key" keyValue="=" />
      </div>
    </div>
  );
};
export default Keypad;
