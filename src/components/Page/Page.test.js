import React from 'react';
import { shallow } from 'enzyme';

import Page from './Page';

describe(Page, () => {
  let props;

  beforeEach(() => {
    props = {
      test: undefined
    };
  });

  it('renders and matches our snapshot', () => {
    const component = shallow(
      <Page>
        <div></div>
      </Page>
    );
    expect(component).toMatchSnapshot();
  });

  it('passes children', () => {
    const component = shallow(
      <Page {...props}>
        <div>Test</div>
      </Page>
    );
    expect(component.contains(<div>Test</div>)).toEqual(true);
  });
});