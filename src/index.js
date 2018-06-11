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
import { reducer as d1 } from 'redux/reducers/default';
import { reducer as d2} from 'redux/reducers/default2';

import HomePage from 'pages/HomePage/HomePage';
import ResultsPage from 'pages/ResultsPage/ResultsPage';

const history = createBrowserHistory();
const store = createStore(
  connectRouter(history)( // Adds router key-value pair to store state
    combineReducers({
      d1,
      d2
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