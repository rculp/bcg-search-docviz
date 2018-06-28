import { shallow } from 'enzyme';

import React from 'react';

import Card from './Card';

describe('Card', () => {
  it('renders and matches our snapshot', () => {
    const component = shallow(
      <Card />
    );
    expect(component).toMatchSnapshot();
  });
});