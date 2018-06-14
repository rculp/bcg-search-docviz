import React from 'react';
import PropTypes from 'prop-types';

import './Page.css';

const Page = ({ id, children }) => (
  <div id={id} className="page">
    {children}
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
