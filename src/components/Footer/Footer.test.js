import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Footer from './Footer';

describe(Footer, () => {
  const component = shallow(
    <Footer />
  );

  it('renders and matches our snapshot', () => {
    const component = renderer.create(
      <Footer />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});