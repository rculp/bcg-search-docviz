import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v1';

import { Header } from 'semantic-ui-react';

import './RefinerTagCloud.scss';

const RefinerTagCloud = ({ box }) => (
  <div className="refiner-tag-cloud">
    <Header as="h2">{box.display}</Header>
    <ul>
      { box.items.map(item => <li key={uuid()}>{item.Name}</li>) }
    </ul>
  </div>
);

RefinerTagCloud.propTypes = {
  box: PropTypes.shape({
    display: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape(
      { Name: PropTypes.string }
    ))
  }).isRequired
};

export default RefinerTagCloud;
