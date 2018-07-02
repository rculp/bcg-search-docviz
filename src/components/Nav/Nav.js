import React from 'react';
import { Link } from 'react-router-dom';
import { UI_URL } from 'config';
import Menu from 'components/Menu/Menu';
import './Nav.scss';

const Nav = () => (
  <nav>
    <Menu>
      <Link to={UI_URL.HOME}>
        <div className="logo">M</div>
      </Link>
    </Menu>
  </nav>
);

export default Nav;
