import { shallow } from 'enzyme';

import React from 'react';

import Card from './Card';

describe('Card', () => {
  it('renders and matches our snapshot', () => {
    const component = shallow(
      <Card />
    );
    expect(component).toMatchSnapshot();
  });

  it('renders and matches our snapshot', () => {
    const component = shallow(
      <Card.PracticeArea>Area</Card.PracticeArea>
    );
    expect(component).toMatchSnapshot();
  });

  it('renders and matches our snapshot', () => {
    const component = shallow(
      <Card.MatchPercentage>100%</Card.MatchPercentage>
    );
    expect(component).toMatchSnapshot();
  });
});