import { shallow } from 'enzyme';

import React from 'react';

import Message from './Message';

describe('Message', () => {
  it('renders and matches our snapshot', () => {
    const component = shallow(
      <Message />
    );
    expect(component).toMatchSnapshot();
  });
});