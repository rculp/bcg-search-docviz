import React from 'react';
import { shallow } from 'enzyme';

import Page from './Page';

describe('Page', () => {
  const props = {
    id: 'test-page'
  };

  it('renders and matches our snapshot', () => {
    const component = shallow(
      <Page {...props}>
        <div></div>
      </Page>
    );
    expect(component).toMatchSnapshot();
  });
});