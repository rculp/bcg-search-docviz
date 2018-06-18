import { shallow } from 'enzyme';
import uuid from 'uuid/v1'; jest.mock('uuid/v1', () => (jest.fn(() => 1)));

import React from 'react';
import configureStore from 'redux-mock-store';
import { Message } from 'semantic-ui-react';

import ConnectedResultsContainer, { ResultsContainer } from './Results';

describe('Results', () => {
  const mockStore = configureStore();
  const initialState_full = {
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
  const initialState_noResult = {
    search: {
      results: {
        Result: null
      }
    }
  };
  const initialState_noDocsReturned = {
    search: {
      results: {
        Result: {
          Docs: []
        }
      }
    }
  };
  const mockHistory = {push: jest.fn()};
  let store;

  beforeEach(() => {
    mockHistory.push.mockReset();
    store = mockStore(initialState_full);
  });

  it('connects to redux store', () => {
    const component = shallow(
      <ConnectedResultsContainer store={store} />
    );
    expect(component.props().results).toEqual(initialState_full.search.results);
  });

  it('renders and matches our snapshot', () => {
    const component = shallow(
      <ResultsContainer results={initialState_full.search.results} history={mockHistory}/>
    );
    expect(component).toMatchSnapshot();
  });

  it('shows message if no docs are found', () => {
    const component = shallow(
      <ResultsContainer results={initialState_noDocsReturned.search.results} history={mockHistory}/>
    );
    expect(component.find(Message).props().header).toEqual('No Results Found');
  });

  it('redirects to / if no results are found', () => {
    const component = shallow(
      <ResultsContainer results={initialState_noResult.search.results} history={mockHistory}/>
    );
    expect(mockHistory.push).toHaveBeenCalledWith('/');
  });
});
