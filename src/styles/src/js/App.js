import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Typography from './Components/Typography';
import Colors from './Components/Colors';
import { Grid, Row, Col } from 'react-flexbox-grid';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <header className='header'>
            <div className='header__logo'>
              <p className='header__logo-text'>M</p>
            </div>
          </header>
          <Grid fluid>
            <Row>
              <Col xs={12} md={2} lg={1}>
                <nav className='nav-vertical'>
                  <ul className='nav__list'>
                    <li className='nav__list-item'><NavLink to='/typography' className='nav__list-link' activeClassName='nav__list-link--is-active'>Typography</NavLink></li>
                    <li className='nav__list-item'><NavLink to='/colors' className='nav__list-link' activeClassName='nav__list-link--is-active'>Colors</NavLink></li>
                  </ul>
                </nav>
              </Col>
              <Col xs={12} md={10} lg={11}>
                <Route path='/typography' component={Typography} />
                <Route path='/colors' component={Colors} />
              </Col>
            </Row>
          </Grid>
        </div>
      </Router>
    );
  }
}

export default App;
