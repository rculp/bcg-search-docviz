import { shallow, mount } from 'enzyme';

import React from 'react';
import configureStore from 'redux-mock-store'
import { Input } from 'semantic-ui-react';

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

  it('connects to redux store', () => {
    const component = shallow(
      <ConnectedHomeContainer store={store}/>
    );

    expect(component.props().searchValue).toEqual(initialState.search.searchValue);
    expect(component.props().loading).toEqual(initialState.search.loading);
    expect(component.props().error).toEqual(initialState.search.error);
    expect(component.props().shouldRedirect).toEqual(initialState.search.shouldRedirect);
  });

  it('renders and matches our snapshot', () => {
    const component = shallow(
      <HomeContainer />
    );
    expect(component).toMatchSnapshot();
  });

  it('goes through lifecycle methods', () => {
    const component = mount(
      <HomeContainer />
    );
    //const componentDidUpdateSpy = jest.spyOn(component.prototype, 'componentDidUpdate');
    //expect(componentDidUpdateSpy).toHaveBeenCalled();
    expect(component.find(Input).simulate('change', {value: 'test'}));
  });
});
