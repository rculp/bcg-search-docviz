import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Scrollspy from 'react-scrollspy';
import TypographyDisplay from './TypographyDisplay';
import TypographyHeading from './TypographyHeading';
import TypographyBody from './TypographyBody';
import TypographyLabel from './TypographyLabel';

class Typography extends Component {
  render() {
    return (
      <Row>
        <Col xs={12} md={2}>
          <div className='nav-vertical'>
            <Scrollspy offset={56} items={['display', 'heading', 'body', 'label']} currentClassName="nav__list-item--is-active" className='nav__list'>
              <li className='nav__list-item'><a href="#display" className='nav__list-link'>Display</a></li>
              <li className='nav__list-item'><a href="#heading" className='nav__list-link'>Heading</a></li>
              <li className='nav__list-item'><a href="#body" className='nav__list-link'>Body</a></li>
              <li className='nav__list-item'><a href='#label' className='nav__list-link'>Label</a></li>
            </Scrollspy>
          </div>
        </Col>
        <Col xs={12} md={10}>
          <TypographyDisplay />
          <TypographyHeading />
          <TypographyBody />
          <TypographyLabel />
        </Col>
      </Row>
    );
  }
}

export default Typography;
