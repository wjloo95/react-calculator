import React from 'react';
import { shallow, mount } from 'enzyme';

import Calculator from './Calculator';
import Display from '../Display/Display';
import Keypad from '../Keypad/Keypad';

describe('Calculator', () => {
  let wrapper: any;

  beforeEach(() => (wrapper = shallow(<Calculator />)));

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render the Display Component', () => {
    expect(
      wrapper.containsMatchingElement(
        <Display displayValue={wrapper.instance().state.displayValue} />
      )
    ).toEqual(true);
  });

  it('should render the Keypad Component', () => {
    expect(
      wrapper.containsMatchingElement(
        <Keypad
          callOperator={wrapper.instance().callOperator}
          numbers={wrapper.instance().state.numbers}
          operators={wrapper.instance().state.operators}
          setOperator={wrapper.instance().setOperator}
          updateDisplay={wrapper.instance().updateDisplay}
        />
      )
    ).toEqual(true);
  });
});

describe('mounted Calculator', () => {
  let wrapper: any;

  beforeEach(() => (wrapper = mount(<Calculator />)));

  it('should call updateDisplay when a number key is clicked ', () => {
    const spy = jest.spyOn(wrapper.instance(), 'updateDisplay');
    wrapper.instance().forceUpdate();
    expect(spy).toHaveBeenCalledTimes(0);
    wrapper.find('.number-key').first().simulate('click');
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should call setOperator when an operator key is clicked', () => {
    const spy = jest.spyOn(wrapper.instance(), 'setOperator');
    wrapper.instance().forceUpdate();
    expect(spy).toHaveBeenCalledTimes(0);
    wrapper.find('.operator-key').first().simulate('click');
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should call callOperator when the submit key is clicked', () => {
    const spy = jest.spyOn(wrapper.instance(), 'callOperator');
    wrapper.instance().forceUpdate();
    expect(spy).toHaveBeenCalledTimes(0);
    wrapper.find('.submit-key').simulate('click');
    expect(spy).toHaveBeenCalledTimes(1);
  });

  describe('updateDisplay', () => {
    let wrapper: any;

    beforeEach(() => (wrapper = shallow(<Calculator />)));

    it('should update displayValue', () => {
      wrapper.instance().updateDisplay('5');
      expect(wrapper.state('displayValue')).toEqual('5');
    });

    it('should concatenate displayValue', () => {
      wrapper.instance().updateDisplay('5');
      wrapper.instance().updateDisplay('0');
      expect(wrapper.state('displayValue')).toEqual('50');
    });

    it('should remove leading 0 from displayValue', () => {
      wrapper.instance().updateDisplay('0');
      expect(wrapper.state('displayValue')).toEqual('0');
      wrapper.instance().updateDisplay('5');
      expect(wrapper.state('displayValue')).toEqual('5');
    });

    it('should prevent multiple leading 0s from displayValue', () => {
      wrapper.instance().updateDisplay('0');
      wrapper.instance().updateDisplay('0');
      expect(wrapper.state('displayValue')).toEqual('0');
    });

    it('should remove last char of displayValue', () => {
      wrapper.instance().updateDisplay('5');
      wrapper.instance().updateDisplay('0');
      wrapper.instance().updateDisplay('ce');
      expect(wrapper.state('displayValue')).toEqual('5');
    });

    it('should prevent multiple instances of . in displayValue', () => {
      wrapper.instance().updateDisplay('.');
      wrapper.instance().updateDisplay('.');
      expect(wrapper.state('displayValue')).toEqual('.');
    });

    it('should set displayValue to 0 if displayValue is equal to an empty string', () => {
      wrapper.instance().updateDisplay('ce');
      expect(wrapper.state('displayValue')).toEqual('0');
    });
  });

  describe('setOperator', () => {
    let wrapper: any;

    beforeEach(() => (wrapper = shallow(<Calculator />)));

    it('should update the value of selectedOperator', () => {
      wrapper.instance().setOperator('+');
      expect(wrapper.state('selectedOperator')).toEqual('+');
      wrapper.instance().setOperator('/');
      expect(wrapper.state('selectedOperator')).toEqual('/');
    });

    it('should update the value of storedValue to the value of displayValue', () => {
      wrapper.setState({ displayValue: '5' });
      wrapper.instance().setOperator('+');
      expect(wrapper.state('storedValue')).toEqual('5');
    });

    it('should update the value of displayValue to 0', () => {
      wrapper.setState({ displayValue: '5' });
      wrapper.instance().setOperator('+');
      expect(wrapper.state('displayValue')).toEqual('0');
    });

    it('should not treat selectedOperator as an empty string', () => {
      wrapper.setState({ displayValue: '5' });
      wrapper.instance().setOperator('+');
      expect(wrapper.state('storedValue')).toEqual('5');
      wrapper.instance().setOperator('-');
      expect(wrapper.state('storedValue')).toEqual('5');
    });
  });
});
