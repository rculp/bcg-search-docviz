import React from 'react';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import { store, history } from 'redux/store';

import HomeContainer from 'containers/Home/Home';
import ResultsContainer from 'containers/Results/Results';

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route path="/results" component={ResultsContainer} />
        <Redirect from="*" to="/" />
      </Switch>
    </ConnectedRouter>
  </Provider>
);

export default hot(module)(App);
