import { shallow } from 'enzyme';

import React from 'react';

import Form from './Form';

describe('Form', () => {
  it('renders and matches our snapshot', () => {
    const component = shallow(
      <Form />
    );
    expect(component).toMatchSnapshot();
  });
});