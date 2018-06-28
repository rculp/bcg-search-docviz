import { shallow } from 'enzyme';

import React from 'react';

import Button from './Button';

describe('Button', () => {
  it('renders and matches our snapshot', () => {
    const component = shallow(
      <Button />
    );
    expect(component).toMatchSnapshot();
  });
});