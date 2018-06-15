import React from 'react';
import { shallow } from 'enzyme';

import RefinerTree from './RefinerTree';

describe('Refiner List', () => {
  const props = {
    box: {
      display: 'displayName'
    }
  };

  it('renders and matches our snapshot', () => {
    const component = shallow(
      <RefinerTree {...props} />
    );
    expect(component).toMatchSnapshot();
  });
});