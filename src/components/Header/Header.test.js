import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Header from './Header';

describe(Header, () => {
  const component = shallow(
    <Header />
  );

  it('renders and matches our snapshot', () => {
    const component = renderer.create(
      <Header />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
