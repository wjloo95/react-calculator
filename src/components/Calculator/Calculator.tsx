import React, { Component } from 'react';
import './Calculator.css';

import Display from '../Display/Display';
import Keypad from '../Keypad/Keypad';

interface IProps {}
interface IState {
  displayValue?: string;
  numbers?: string[];
  operators?: string[];
  selectedOperator?: string;
  storedValue?: string;
}

const initialState = {
  displayValue: '0',
  numbers: ['9', '8', '7', '6', '5', '4', '3', '2', '1', '.', '0', 'ce'],
  operators: ['/', 'x', '-', '+'],
  selectedOperator: '',
  storedValue: '',
};
export default class Calculator extends Component<IProps, IState> {
  readonly state = initialState;

  callOperator = (value: any): void => {
    console.log('call operation');
  };

  setOperator = (value: any) => {
    console.log('set operation');
  };

  updateDisplay = (value: any) => {
    console.log('update display');
  };

  render = () => {
    const { displayValue, numbers, operators } = this.state;
    return (
      <div className="calculator-container">
        <Display displayValue={displayValue} />
        <Keypad
          callOperator={this.callOperator}
          numbers={numbers}
          operators={operators}
          setOperator={this.setOperator}
          updateDisplay={this.updateDisplay}
        />
      </div>
    );
  };
}
