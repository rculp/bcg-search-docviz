import { PENDING, FULFILLED, REJECTED } from 'redux-promise-middleware';
import { API_URL } from 'config';

export const name = 'search';

export const RESET = 'RESET';
export const CHANGE_SEARCH_VALUE = 'CHANGE_SEARCH_VALUE';
export const API_SEARCH_PROFILE = 'API_SEARCH_PROFILE';
export const API_SEARCH_PROFILE_PENDING = `${API_SEARCH_PROFILE}_${PENDING}`;
export const API_SEARCH_PROFILE_REJECTED = `${API_SEARCH_PROFILE}_${REJECTED}`;
export const API_SEARCH_PROFILE_FULFILLED = `${API_SEARCH_PROFILE}_${FULFILLED}`;

const initialState = {
  searchValue: '',
  loading: false,
  error: false,
  shouldRedirect: false,
  results: {}
};

export const actions = {
  reset: () => ({ type: RESET }),
  changeSearchValue: payload => ({ type: CHANGE_SEARCH_VALUE, payload }),
  search: payload => ({
    type: API_SEARCH_PROFILE,
    payload: fetch(API_URL.SEARCH(payload)).then(res => res.json())
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
    case RESET:
      return {
        ...state,
        shouldRedirect: false
      };
    case CHANGE_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.payload
      };
    case API_SEARCH_PROFILE_PENDING:
      return {
        ...state,
        loading: true
      };
    case API_SEARCH_PROFILE_REJECTED:
      return {
        ...state,
        loading: false,
        error: true,
        shouldRedirect: false,
        results: {}
      };
    case API_SEARCH_PROFILE_FULFILLED:
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
