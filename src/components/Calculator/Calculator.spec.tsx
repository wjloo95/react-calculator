import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import Calculator from './Calculator';

describe('Calculator', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => (wrapper = shallow(<Calculator />)));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });
});
