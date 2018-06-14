import React from 'react';
import uuid from 'uuid/v1';

import { Header } from 'semantic-ui-react';

import './RefinerTagCloud.css';

const RefinerTagCloud = ({ box }) => (
  <div className="refiner-tag-cloud">
    <Header as="h2">{box.display}</Header>
    <ul>
      { box.items.map(item => <li key={uuid()}>{item.Name}</li>) }
    </ul>
  </div>
);

export default RefinerTagCloud;
