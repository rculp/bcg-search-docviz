import { API_URL } from 'config';

export const name = 'search';

export const RESET = 'RESET';
export const CHANGE_SEARCH_VALUE = 'CHANGE_SEARCH_VALUE';
export const API_SEARCH_PROFILE_PENDING = 'API_SEARCH_PROFILE_PENDING';
export const API_SEARCH_PROFILE_REJECTED = 'API_SEARCH_PROFILE_REJECTED';
export const API_SEARCH_PROFILE_FULFILLED = 'API_SEARCH_PROFILE_FULFILLED';

const initialState = {
  searchValue: '',
  loading: false,
  error: false,
  errorMessage: '',
  shouldRedirect: false,
  results: [],
  empty: false
};

export const actions = {
  reset: () => ({ type: RESET }),
  changeSearchValue: payload => ({ type: CHANGE_SEARCH_VALUE, payload }),
  search: payload => (dispatch) => {
    dispatch({ type: API_SEARCH_PROFILE_PENDING });

    return fetch(API_URL.SEARCH(payload))
      .then((response) => {
        if (response.status >= 400 && response.status < 600) {
          dispatch({ type: API_SEARCH_PROFILE_REJECTED, payload: 'Bad response from server' });
          return Promise.reject();
        }
        return response.json();
      }, () => {
        dispatch({ type: API_SEARCH_PROFILE_REJECTED, payload: 'Server failed to respond' });
        return Promise.reject();
      })
      .then((json) => {
        dispatch({ type: API_SEARCH_PROFILE_FULFILLED, payload: json });
      });
  }
};

export const selectors = {
  getSearchValue: state => state[name].searchValue,
  getLoading: state => state[name].loading,
  getError: state => state[name].error,
  getErrorMessage: state => state[name].errorMessage,
  getShouldRedirect: state => state[name].shouldRedirect,
  getResults: state => state[name].results,
  getEmpty: state => state[name].empty
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
        loading: true,
        error: false,
        errorMessage: '',
        shouldRedirect: false,
        results: [],
        empty: false
      };
    case API_SEARCH_PROFILE_REJECTED:
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: action.payload
      };
    case API_SEARCH_PROFILE_FULFILLED:
      return {
        ...state,
        loading: false,
        shouldRedirect: true,
        results: action.payload.results,
        empty: action.payload.results.length <= 0
      };
    default:
      return state;
  }
}
