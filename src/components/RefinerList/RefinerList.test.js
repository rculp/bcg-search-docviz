import React from 'react';
import { shallow } from 'enzyme';
import uuid from 'uuid/v1'; jest.mock('uuid/v1', () => (jest.fn(() => 1)));

import RefinerList from './RefinerList';

describe('Refiner List', () => {
  const props = {
    box: {
      display: 'displayName',
      items: [
        { Name: 'name1' },
        { Name: 'name2' },
        { Name: 'name3' }
      ]
    }
  };

  it('renders and matches our snapshot', () => {
    const component = shallow(
      <RefinerList {...props} />
    );
    expect(component).toMatchSnapshot();
  });
});