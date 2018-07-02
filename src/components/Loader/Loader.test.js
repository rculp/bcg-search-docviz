import { shallow } from 'enzyme';

import React from 'react';

import Loader from './Loader';

describe('Loader', () => {
  it('renders and matches our snapshot', () => {
    const component = shallow(
      <Loader />
    );
    expect(component).toMatchSnapshot();
  });
});