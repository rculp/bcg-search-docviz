import { shallow } from 'enzyme';

import React from 'react';

import { ResultsContainer } from './Results';

describe('Home', () => {
  it('renders and matches our snapshot', () => {
    const component = shallow(
      <ResultsContainer />
    );
    expect(component).toMatchSnapshot();
  });
});
