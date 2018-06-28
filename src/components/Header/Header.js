import React from 'react';
import Menu from 'components/Menu/Menu';
import { Row, Col } from 'react-flexbox-grid';
import './Header.scss';

const Header = () => (
  <Menu fixed="top" className="page-header">
    <Row>
      <Col xs={12}>
        <a href="/">
          <div className="logo">M</div>
        </a>
      </Col>
    </Row>
  </Menu>
);

export default Header;
