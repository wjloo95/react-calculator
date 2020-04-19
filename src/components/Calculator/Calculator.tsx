import React, { Component } from 'react';

interface Props {}
interface State {
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
export default class Calculator extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = initialState;
  }
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
