import React from 'react';
import { shallow } from 'enzyme';

import Keypad from './Keypad';

describe('Keypad', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(
      <Keypad
        callOperator={jest.fn()}
        numbers={[]}
        operators={[]}
        setOperator={jest.fn()}
        updateDisplay={jest.fn()}
      />
    );
  });

  it('should render the values of numbers', () => {
    wrapper.setProps({ numbers: ['0', '1', '2'] });
    expect(wrapper.find('.numbers-container').text()).toEqual('012');
  });

  it('should render 2 divs', () => {
    expect(wrapper.find('div').length).toEqual(2);
  });
});
