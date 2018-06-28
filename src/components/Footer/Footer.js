import React from 'react';

import './Footer.scss';

const Footer = () => (
  <div id="footer">
    Here is a sticky footer. If there is not enough content above, it will remain at the
    bottom of the page.
    <br />
    <br />
    If there is enough content above, it will move below the bottom of the viewport. Note
    that this behavior remains consistent even when the footer is given padding. It also
    obeys the bottom padding of the container above if it wishes to add extra space before
    encountering the footer.
  </div>
);

export default Footer;
