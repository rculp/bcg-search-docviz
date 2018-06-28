import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'react-flexbox-grid';

import Nav from 'components/Nav/Nav';
import './Page.scss';

const Page = ({ id, children }) => (
  <div id={id} className="page">
    <header>
      <Nav />
    </header>
    <main>
      <Grid>
        {children}
      </Grid>
    </main>
  </div>
);

Page.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node.isRequired
};

Page.defaultProps = {
  id: null
};

export default Page;
