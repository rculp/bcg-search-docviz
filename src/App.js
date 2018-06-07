import React, { Component } from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';

import HomePage from 'pages/HomePage';
import ResultsPage from 'pages/ResultsPage';

import './App.css';

class App extends Component {

  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/results" component={ResultsPage}/>
        <Redirect from="*" to="/"/>
      </Switch>
    );
  }
}

export default App;

