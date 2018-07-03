import { shallow } from 'enzyme';
import { UI_URL } from 'config';

import React from 'react';
import configureStore from 'redux-mock-store';

import ConnectedHomeContainer, { HomeContainer } from './Home';

import Message from 'components/Message/Message';

describe('Home', () => {
  const mockStore = configureStore();
  const mockActions = {
    search: jest.fn(),
    changeSearchValue: jest.fn()
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
      <HomeContainer actions={mockActions} />
    );
    expect(component).toMatchSnapshot();
  });

  it('redirects to results page if store contains redirect flag', () => {
    const component = shallow(
      <HomeContainer actions={mockActions} history={mockHistory} shouldRedirect={true} searchValue={'testSearchValue'} />
    );

    component.instance().componentDidUpdate();

    expect(mockHistory.push).toHaveBeenCalledWith(UI_URL.RESULTS('testSearchValue'));
  });

  it('does not redirect if store doesn not contain redirect flag', () => {
    const component = shallow(
      <HomeContainer actions={mockActions} history={mockHistory} shouldRedirect={false} searchValue={'testSearchValue'} />
    );

    component.instance().componentDidUpdate();

    expect(mockHistory.push).not.toHaveBeenCalled();
  });
});
