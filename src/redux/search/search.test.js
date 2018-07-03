import { actions, selectors, reducer, CHANGE_SEARCH_VALUE, API_SEARCH_PROFILE_PENDING, API_SEARCH_PROFILE_REJECTED, API_SEARCH_PROFILE_FULFILLED } from './search';
import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import config from 'config';
import { PENDING, FULFILLED, REJECTED } from 'redux-promise-middleware';
import { API_URL } from 'config';

const initialState = {
  searchValue: '',
  loading: false,
  error: false,
  results: {}
};

describe('Search', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('synchronous action creators should generate the correct action objects', () => {
    expect(actions.changeSearchValue('first')).toEqual({ type: 'CHANGE_SEARCH_VALUE', payload: 'first' });
  });

  it('asynchronous action creators should make correct API calls', () => {
    fetchMock
      .getOnce(API_URL.SEARCH('green energy'), '{"json": "stringified"}')
      .catch((response) => {
        expect(response).toEqual({json: 'stringified'});
        expect(response).not.toEqual('{"json": "stringified"}');

        expect(fetchMock.lastCall()[0]).toEqual(API_URL.SEARCH('green energy'));
      });

    actions.search('green energy');
  });

  it('reducers should update store state to the correct new state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);

    expect(reducer(undefined, { type: CHANGE_SEARCH_VALUE, payload: 'new search term' }))
      .toEqual({...initialState, searchValue: 'new search term'});

    expect(reducer(undefined, { type: API_SEARCH_PROFILE_PENDING }))
      .toEqual({...initialState, loading: true});

    expect(reducer(undefined, { type: API_SEARCH_PROFILE_REJECTED }))
      .toEqual({...initialState, loading: false, error: true, results: {}});

    expect(reducer(undefined, { type: API_SEARCH_PROFILE_FULFILLED, payload: [] }))
      .toEqual({...initialState, loading: false, error: false, results: []});
  });
});