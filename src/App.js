import React, { Component } from 'react';

import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom';

import HomeContainer from 'containers/HomeContainer';
import ResultsContainer from 'containers/ResultsContainer';

import './App.css';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Link to="/">Home</Link>
          <Link to="/results">Results</Link>
          <Switch>
            <Route exact path="/" component={HomeContainer}/>
            <Route path="/results" component={ResultsContainer}/>
            <Redirect from="*" to="/"/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

