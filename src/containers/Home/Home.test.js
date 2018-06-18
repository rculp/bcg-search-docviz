import { shallow, mount } from 'enzyme';

import React from 'react';
import configureStore from 'redux-mock-store'

import ConnectedHomeContainer, { HomeContainer } from './Home';

describe('Home', () => {
  const mockStore = configureStore();
  const initialState = {
    search: {
      searchValue: '',
      loading: false,
      error: false,
      shouldRedirect: false
    }
  };
  let store;

  beforeEach(() => {
    store = mockStore(initialState);
  });

  it('renders and matches our snapshot', () => {
    const component = shallow(
      <HomeContainer />
    );
    expect(component).toMatchSnapshot();
  });

  it('connects to redux store', () => {
    const component = shallow(
      <ConnectedHomeContainer store={store}/>
    );

    expect(component.props().searchValue).toEqual('');
    expect(component.props().loading).toEqual(false);
    expect(component.props().error).toEqual(false);
    expect(component.props().shouldRedirect).toEqual(false);
  });

  it('redirects', () => {
    store = mockStore({
      search: {
        shouldRedirect: true
      }
    });

    const component = shallow(
      <ConnectedHomeContainer store={store}/>
    );
  });
});
