import 'semantic-ui-css/semantic.min.css';
import 'index.css';

import registerServiceWorker from 'registerServiceWorker';

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import store from 'redux/store/store';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import HomePage from 'pages/HomePage';
import ResultsPage from 'pages/ResultsPage';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/results" component={ResultsPage}/>
        <Redirect from="*" to="/"/>
      </Switch>
    </BrowserRouter>
  </Provider>
, document.getElementById('root'));

registerServiceWorker();
