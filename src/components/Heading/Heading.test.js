import { shallow } from 'enzyme';

import React from 'react';

import Heading from './Heading';

describe('Heading', () => {
  it('renders and matches our snapshot', () => {
    const component = shallow(
      <Heading />
    );
    expect(component).toMatchSnapshot();
  });
});