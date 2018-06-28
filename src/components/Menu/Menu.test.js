import { shallow } from 'enzyme';

import React from 'react';

import Menu from './Menu';

describe('Menu', () => {
  it('renders and matches our snapshot', () => {
    const component = shallow(
      <Menu />
    );
    expect(component).toMatchSnapshot();
  });
});