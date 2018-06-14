import React from 'react';

import { Header } from 'semantic-ui-react';

import './RefinerTree.css';

const RefinerTree = ({ box }) => (
  <div className="refiner-tree">
    <Header as="h2">{box.display}</Header>
    <div>Tree Refiner - Sinequa doesn&apos;t seem to return the actual items. Possibly need to make another API call?</div>
  </div>
);

export default RefinerTree;
