import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v1';

import Heading from 'components/Heading/Heading';

import './RefinerList.scss';

const RefinerList = ({ box }) => (
  <div className="refiner-list">
    <Heading as="h2">{box.display}</Heading>
    <ul>
      { box.items.map(item => <li key={uuid()}>{item.Name}</li>) }
    </ul>
  </div>
);

RefinerList.propTypes = {
  box: PropTypes.shape({
    display: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape(
      { Name: PropTypes.string }
    ))
  }).isRequired
};

export default RefinerList;
