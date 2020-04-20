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
    let { displayValue, selectedOperator, storedValue } = this.state;

    const updateStoredValue = displayValue;

    let tempDisplayValue = parseInt(displayValue, 10);
    let tempStoredValue = parseInt(storedValue, 10);

    switch (selectedOperator) {
      case '+':
        tempDisplayValue = tempStoredValue + tempDisplayValue;
        break;
      case '-':
        tempDisplayValue = tempStoredValue - tempDisplayValue;
        break;
      case 'x':
        tempDisplayValue = tempStoredValue * tempDisplayValue;
        break;
      case '/':
        tempDisplayValue = tempStoredValue / tempDisplayValue;
        break;
      default:
        // set tempDisplayValue to zero if no case matches
        tempDisplayValue = 0;
    }

    displayValue = tempDisplayValue.toString();

    selectedOperator = '';

    if (displayValue === 'NaN' || displayValue === 'Infinity') {
      displayValue = '0';
    }

    this.setState({
      displayValue,
      selectedOperator,
      storedValue: updateStoredValue,
    });
  };

  setOperator = (value: any) => {
    let { displayValue, selectedOperator, storedValue } = this.state;

    if (selectedOperator === '') {
      storedValue = displayValue;
      displayValue = '0';
    }
    selectedOperator = value;

    this.setState({ displayValue, selectedOperator, storedValue });
  };

  updateDisplay = (value: any) => {
    let { displayValue } = this.state;
    if (value === '.' && displayValue.includes('.')) {
      value = '';
    }

    if (value === 'ce') {
      // displayValue = displayValue.substr(0, displayValue.length - 1);
      // if (displayValue === '') {
      //   displayValue = '0';
      // }
      displayValue = '0';
    } else {
      displayValue = displayValue === '0' ? value : displayValue + value;
    }

    this.setState({ displayValue });
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
