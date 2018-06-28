import { shallow } from 'enzyme';

import React from 'react';

import Input from './Input';

describe('Input', () => {
  it('renders and matches our snapshot', () => {
    const component = shallow(
      <Input />
    );
    expect(component).toMatchSnapshot();
  });
});