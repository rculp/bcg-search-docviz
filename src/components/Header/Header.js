import React from 'react';
import { Grid, Menu } from 'semantic-ui-react';
import './Header.scss';

const Header = () => (
  <Menu attached="top">
    <Grid>
      <Grid.Column width={12}>
        <a href="/">
          <div className="logo">M</div>
        </a>
      </Grid.Column>
    </Grid>
  </Menu>
);

export default Header;
