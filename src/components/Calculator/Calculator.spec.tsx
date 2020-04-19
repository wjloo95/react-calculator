import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import Calculator from './Calculator';
import Display from '../Display/Display';

describe('Calculator', () => {
  let wrapper: any;

  beforeEach(() => (wrapper = shallow(<Calculator />)));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render the Display Component', () => {
    expect(wrapper)
      .containsMatchingElement(<Display />)
      .toEqual(true);
  });
});
