import React from 'react';
import uuid from 'uuid/v1';

import { Header } from 'semantic-ui-react';

import './RefinerList.css';

const RefinerList = ({ box }) => (
  <div className="refiner-list">
    <Header as="h2">{box.display}</Header>
    <ul>
      { box.items.map(item => <li key={uuid()}>{item.Name}</li>) }
    </ul>
  </div>
);

export default RefinerList;