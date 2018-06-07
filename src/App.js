import React, { Component } from 'react';

import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom';

import HomeContainer from 'containers/HomeContainer';
import ResultsContainer from 'containers/ResultsContainer';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <div className="content">
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
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;

