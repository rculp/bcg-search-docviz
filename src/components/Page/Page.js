import React from 'react';

import './Page.css';

const Page = ({id, children}) => (
  <div id={id} className="page">
    {children}
  </div>
);

export default Page;
