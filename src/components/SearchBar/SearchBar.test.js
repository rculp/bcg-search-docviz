import { shallow } from 'enzyme';

import React from 'react';

import SearchBar from './SearchBar';

describe('SearchBar', () => {
  it('renders and matches our snapshot', () => {
    const component = shallow(
      <SearchBar />
    );
    expect(component).toMatchSnapshot();
  });
});
