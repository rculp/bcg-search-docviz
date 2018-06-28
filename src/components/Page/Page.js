import React from 'react';
import PropTypes from 'prop-types';

import Header from 'components/Header/Header';
import './Page.scss';

const Page = ({ id, children }) => (
  <div id={id} className="page">
    <Header />
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
