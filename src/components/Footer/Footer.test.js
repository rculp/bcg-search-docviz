import { shallow } from 'enzyme';

import React from 'react';

import Footer from './Footer';

describe(Footer, () => {
  it('renders and matches our snapshot', () => {
    const component = shallow(
      <Footer />
    );
    expect(component).toMatchSnapshot();
  });
});