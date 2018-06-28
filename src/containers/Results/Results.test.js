jest.mock('uuid/v1', () => (jest.fn(() => 1)));

import { shallow } from 'enzyme';
import uuid from 'uuid/v1';

import React from 'react';
import configureStore from 'redux-mock-store';

import ConnectedResultsContainer, { ResultsContainer } from './Results';
import Message from 'components/Message/Message';

describe('Results', () => {
  const mockStore = configureStore();
  const initialState = {
    search: {
      results: {
        Result: {
          Boxes: [
            { type: 'TagCloud' },
            { type: 'Tree' },
            { type: 'List' },
            { type: 'Unrecognized Type' }
          ],
          Docs: [
            { filename: 'filename1', largesummaryhtml: '<b>test</b>' }
          ]
        }
      }
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
      <ConnectedResultsContainer store={store} />
    );
    expect(component.props().results).toEqual(initialState.search.results);
  });

  it('renders and matches our snapshot', () => {
    const component = shallow(
      <ResultsContainer results={initialState.search.results} history={mockHistory}/>
    );
    expect(component).toMatchSnapshot();
  });

  it('shows message if no docs are found', () => {
    const initialState_noDocsReturned = {...initialState};
    initialState_noDocsReturned.search.results.Result.Docs = [];

    const component = shallow(
      <ResultsContainer results={initialState_noDocsReturned.search.results} history={mockHistory}/>
    );
    expect(component.find(Message).props().header).toEqual('No Results Found');
  });

  it('redirects to / if no results are found', () => {
    const initialState_noResult = {...initialState};
    initialState_noResult.search.results.Result = null;

    const component = shallow(
      <ResultsContainer results={initialState_noResult.search.results} history={mockHistory}/>
    );
    expect(mockHistory.push).toHaveBeenCalledWith('/');
  });
});
