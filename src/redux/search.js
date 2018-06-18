import { PENDING, FULFILLED, REJECTED } from 'redux-promise-middleware';

export const name = 'search';

const RESET = 'RESET';
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
  reset: () => ({ type: RESET }),
  changeSearchValue: payload => ({ type: CHANGE_SEARCH_VALUE, payload }),
  search: payload => ({
    type: API_SEARCH_PROFILE,
    payload:
      fetch(`http://ac0d6759772e911e8929102ebb5f786c-2146110952.eu-central-1.elb.amazonaws.com:9053/search?q=${encodeURIComponent(payload)}`)
        .then(res => res.json())
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
