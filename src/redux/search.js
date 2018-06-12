import sdk from 'sinequa-sdk';
import { PENDING, FULFILLED, REJECTED } from 'redux-promise-middleware';

export const name = 'search';

const RESET = 'RESET';
const CHANGE_SEARCH_VALUE = 'CHANGE_SEARCH_VALUE';
const API_SEARCH_PROFILE = 'API_SEARCH_PROFILE';

const initialState = {
  searchValue: '',
  loading: false,
  error: false,
  fulfilled: false,
  results: {}
};

export const actions = {
  reset: () => ({ type: CHANGE_SEARCH_VALUE }),
  changeSearchValue: payload => ({ type: CHANGE_SEARCH_VALUE, payload }),
  search: payload => ({
    type: API_SEARCH_PROFILE,
    payload: sdk.search.basicQuery(payload)
  })
};

export const selectors = {
  getSearchValue: state => state[name].searchValue,
  getLoading: state => state[name].loading,
  getError: state => state[name].error,
  getFulfilled: state => state[name].fulfilled,
  getResults: state => state[name].results
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case RESET:
      return initialState;
    case CHANGE_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.payload
      };
    case `${API_SEARCH_PROFILE}_${PENDING}`:
      return {
        ...state,
        loading: true
      };
    case `${API_SEARCH_PROFILE}_${REJECTED}`:
      return {
        ...state,
        loading: false,
        error: true,
        fulfilled: false,
        results: {}
      };
    case `${API_SEARCH_PROFILE}_${FULFILLED}`:
      return {
        ...state,
        loading: false,
        error: false,
        fulfilled: true,
        results: action.payload
      };
    default:
      return state;
  }
}
