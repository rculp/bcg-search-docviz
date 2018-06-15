import { shallow } from 'enzyme';

import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import { store, history } from 'redux/store';

import Home from 'containers/Home/Home';
import Results from 'containers/Results/Results';

import './App';

xdescribe('Index file', () => {
  it('should attach redux provider, router, and routes to the DOM', () => {
    expect(ReactDOM.render).toHaveBeenCalledWith(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/results" component={Results} />
            <Redirect from="*" to="/" />
          </Switch>
        </ConnectedRouter>
      </Provider>,
      null
    );
  });

  it('should attach redux provider, router, and routes to the DOM', () => {
    //expect(store).toEqual({});
    expect(Provider).toEqual({});
  });
});