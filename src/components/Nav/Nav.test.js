import { shallow } from 'enzyme';

import React from 'react';

import Nav from './Nav';

describe('Nav', () => {
  it('renders and matches our snapshot', () => {
    const component = shallow(
      <Nav />
    );
    expect(component).toMatchSnapshot();
  });
});
