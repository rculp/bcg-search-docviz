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

  it('shows error message error is set', () => {
    const component = shallow(
      <HomeContainer  actions={mockActions} error={true}/>
    );
    expect(component.find(Message).props().header).toEqual('Search Failed');
  });

  it('should fetch results when submit button is clicked', () => {
    const component = mount(
      <StaticRouter context={{}}>
        <HomeContainer actions={mockActions} searchValue="testSearchValue" />
      </StaticRouter>
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
