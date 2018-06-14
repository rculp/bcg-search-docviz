import React from 'react';
import { shallow } from 'enzyme';

import Footer from './Footer';

describe(Footer, () => {
  it('renders and matches our snapshot', () => {
    const component = shallow(
      <Footer />
    );
    expect(component).toMatchSnapshot();
  });
});