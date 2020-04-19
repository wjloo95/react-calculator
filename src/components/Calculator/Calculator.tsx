import React, { Component } from 'react';
import './Calculator.css';

interface IProps {}
interface IState {
  displayValue?: string;
  numbers?: number[];
  operators?: string[];
  selectedOperator?: string;
  storedValue?: string;
}

const initialState = {
  displayValue: '0',
  numbers: [],
  operators: [],
  selectedOperator: '',
  storedValue: '',
};
export default class Calculator extends Component<IProps, IState> {
  readonly state = initialState;

  callOperator = () => {
    console.log('call operation');
  };

  setOperator = () => {
    console.log('set operation');
  };

  updateDisplay = () => {
    console.log('update display');
  };

  render = () => {
    return <div className="calculator-container" />;
  };
}
