import sdk from 'sinequa-sdk';
import { PENDING, FULFILLED, REJECTED } from 'redux-promise-middleware';

export const name = 'search';

const CHANGE_SEARCH_VALUE = 'CHANGE_SEARCH_VALUE';
const API_SEARCH_PROFILE = 'API_SEARCH_PROFILE';

const initialState = {
  searchValue: '',
  loading: false,
  error: false,
  shouldRedirect: false,
  results: {}
};

export const actions = {
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
  getShouldRedirect: state => state[name].shouldRedirect,
  getResults: state => state[name].results
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case '@@router/LOCATION_CHANGE':
      return {
        ...state,
        shouldRedirect: false
      };
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
        shouldRedirect: false,
        results: {}
      };
    case `${API_SEARCH_PROFILE}_${FULFILLED}`:
      return {
        ...state,
        loading: false,
        error: false,
        shouldRedirect: true,
        results: action.payload
      };
    default:
      return state;
  }
}
