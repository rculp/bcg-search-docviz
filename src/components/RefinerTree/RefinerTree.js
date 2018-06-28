import React from 'react';
import PropTypes from 'prop-types';

import Heading from 'components/Heading/Heading';

import './RefinerTree.scss';

const RefinerTree = ({ box }) => (
  <div className="refiner-tree">
    <Heading as="h2">{box.display}</Heading>
    <div>Tree Refiner - Sinequa doesn&apos;t seem to return the actual items. Possibly need to make another API call?</div>
  </div>
);

RefinerTree.propTypes = {
  box: PropTypes.shape({
    display: PropTypes.string
  }).isRequired
};

export default RefinerTree;
