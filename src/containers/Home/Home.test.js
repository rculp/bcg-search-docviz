import { shallow } from 'enzyme';

import React from 'react';

import { HomeContainer } from './Home';

describe('Home', () => {
  it('renders and matches our snapshot', () => {
    const component = shallow(
      <HomeContainer />
    );
    expect(component).toMatchSnapshot();
  });
});
