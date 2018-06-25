import { shallow } from 'enzyme';

import React from 'react';

import BcgHeader from './BcgHeader';

describe('BcgHeader', () => {
  it('renders and matches our snapshot', () => {
    const component = shallow(
      <BcgHeader />
    );
    expect(component).toMatchSnapshot();
  });
});
