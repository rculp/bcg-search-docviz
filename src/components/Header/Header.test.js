import { shallow } from 'enzyme';

import React from 'react';

import Header from './Header';

describe(Header, () => {
  it('renders and matches our snapshot', () => {
    const component = shallow(
      <Header />
    );
    expect(component).toMatchSnapshot();
  });
});
