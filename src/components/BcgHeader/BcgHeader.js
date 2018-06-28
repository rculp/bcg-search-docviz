import React from 'react';
import { Grid } from 'semantic-ui-react';

import './BcgHeader.scss';

const BcgHeader = () => (
  <header className="bcg-header ui fixed menu">
    <Grid>
      <Grid.Column width={12}>
        <a href="/">
          <div className="logo">M</div>
        </a>
      </Grid.Column>
    </Grid>
  </header>
);

export default BcgHeader;
