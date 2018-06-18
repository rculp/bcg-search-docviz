import { shallow } from 'enzyme';

import React from 'react';

import ConnectedResultsContainer, { ResultsContainer } from './Results';

describe('Results', () => {
  xit('renders and matches our snapshot', () => {
    const component = shallow(
      <ResultsContainer />
    );
    expect(component).toMatchSnapshot();
  });

  xit('connects to redux store', () => {
    const component = shallow(
      <ConnectedResultsContainer />
    );
    expect(component.props().searchValue).toEqual();
  });
});
