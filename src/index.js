//TODO redux-form                      - store form state in redux store
//TODO redux-immutable-state-invariant - throw error if not immutable in dev
//TODO reselect                        - efficient redux selectors

import 'semantic-ui-css/semantic.min.css';
import 'index.css';

import registerServiceWorker from 'registerServiceWorker';

import React from 'react';
import ReactDOM from 'react-dom';

import { Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware, ConnectedRouter } from 'connected-react-router'

import { combineReducers, applyMiddleware, createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import { name as searchReducerName, reducer as searchReducer } from 'redux/search';

import HomePage from 'pages/HomePage/HomePage';
import ResultsPage from 'pages/ResultsPage/ResultsPage';

const history = createBrowserHistory();
const store = createStore(
  connectRouter(history)( // Adds router key-value pair to store state
    combineReducers({
      [searchReducerName]: searchReducer
    })
  ),
  compose(
    applyMiddleware(             // Order dependent
      routerMiddleware(history), // Enables dispatching actions
      promiseMiddleware(),       // Enables actions to return promises
      thunkMiddleware,           // Enables actions to return functions
      createLogger({})           // Must be at bottom
    )
  )
);

ReactDOM.render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/results" component={ResultsPage}/>
        <Redirect from="*" to="/"/>
      </Switch>
    </ConnectedRouter>
  </Provider>
), document.getElementById('root'));

registerServiceWorker();