import './Page.css';

import React from 'react';

const Page = ({id, children}) => (
  <div id={id} className="page">
    {children}
  </div>
);

export default Page;
