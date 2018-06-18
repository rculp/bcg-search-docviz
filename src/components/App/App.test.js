import { shallow } from 'enzyme';

import React from 'react';

import App from './App';

describe('App', () => {
  it('renders and matches our snapshot', () => {
    const component = shallow(
      <App />
    );
    expect(component).toMatchSnapshot();
  });
});