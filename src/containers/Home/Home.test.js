import { shallow, mount } from 'enzyme';
import { API_URL } from 'config';

import React from 'react';
import configureStore from 'redux-mock-store'
import { Input, Button, Message } from 'semantic-ui-react';

import ConnectedHomeContainer, { HomeContainer } from './Home';

describe('Home', () => {
  const mockStore = configureStore();
  const mockActions = {
    search: jest.fn(),
    changeSearchValue: jest.fn(),
    reset: jest.fn()
  };
  const initialState = {
    search: {
      searchValue: '',
      loading: false,
      error: false,
      shouldRedirect: false
    }
  };

  const mockHistory = {push: jest.fn()};
  let store;

  beforeEach(() => {
    jest.clearAllMocks();
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

  it('shows error message error is set', () => {
    const component = shallow(
      <HomeContainer error={true}/>
    );
    expect(component.find(Message).props().header).toEqual('Search Failed');
  });

  it('should fetch results when submit button is clicked', () => {
    const component = mount(
      <HomeContainer actions={mockActions} searchValue="testSearchValue" />
    );
    component.find(Button).simulate('click');
    expect(mockActions.search).toHaveBeenCalledWith('testSearchValue');
  });

  it('should change search value when input value changes', () => {
    const mockEvent = {
      target: {
        value: 'test'
      }
    };
    const component = shallow(
      <HomeContainer actions={mockActions}/>
    );
    component.find(Input).simulate('change', mockEvent);
    expect(mockActions.changeSearchValue).toHaveBeenCalledWith('test');
  });

  it('should reset when unmounted', () => {
    jest.spyOn(HomeContainer.prototype, 'componentWillUnmount');

    const component = shallow(
      <HomeContainer actions={mockActions} history={mockHistory} shouldRedirect={false} searchValue={'testSearchValue'} />
    );

    component.instance().componentWillUnmount();

    expect(mockActions.reset).toHaveBeenCalled();
  });

  it('redirects to results page if store contains redirect flag', () => {
    jest.spyOn(HomeContainer.prototype, 'componentDidUpdate');

    const component = shallow(
      <HomeContainer actions={mockActions} history={mockHistory} shouldRedirect={true} searchValue={'testSearchValue'} />
    );

    component.instance().componentDidUpdate();

    expect(mockHistory.push).toHaveBeenCalledWith(API_URL.SEARCH('testSearchValue'));
  });

  it('does not redirect if store doesn not contain redirect flag', () => {
    jest.spyOn(HomeContainer.prototype, 'componentDidUpdate');

    const component = shallow(
      <HomeContainer actions={mockActions} history={mockHistory} shouldRedirect={false} searchValue={'testSearchValue'} />
    );

    component.instance().componentDidUpdate();

    expect(mockHistory.push).not.toHaveBeenCalled();
  });
});
