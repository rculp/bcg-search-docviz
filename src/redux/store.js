import { connectRouter, routerMiddleware } from 'connected-react-router';
import { combineReducers, applyMiddleware, createStore, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import { createBrowserHistory } from 'history';
import { name as searchReducerName, reducer as searchReducer } from './search/search';

const history = createBrowserHistory();
const store = createStore(
  connectRouter(history)( // Adds router key-value pair to store state
    combineReducers({
      [searchReducerName]: searchReducer
    })
  ),
  compose(
    applyMiddleware( // Order dependent
      routerMiddleware(history), // Enables dispatching actions
      promiseMiddleware(), // Enables actions to return promises
      thunkMiddleware, // Enables actions to return functions
      createLogger({ diff: true, collapsed: true }) // Must be at bottom
    )
  )
);

export {
  store,
  history
};
