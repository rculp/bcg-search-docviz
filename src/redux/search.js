export const name = 'search';

const CHANGE_SEARCH_VALUE = 'CHANGE_SEARCH_VALUE';
const CHANGE_LOADING = 'CHANGE_LOADING';
const CHANGE_RESULTS = 'CHANGE_RESULTS';

const initialState = {
  searchValue: '',
  loading: false,
  results: {}
};

export const actions = {
  changeSearchValue: payload => ({ type: CHANGE_SEARCH_VALUE, payload }),
  changeLoading: payload => ({ type: CHANGE_LOADING, payload }),
  changeResults: payload => ({ type: CHANGE_RESULTS, payload })
};

export const selectors = {
  getSearchValue: state => state[name].searchValue,
  getLoading: state => state[name].loading,
  getResults: state => state[name].results
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.payload
      };
    case CHANGE_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    case CHANGE_RESULTS:
      return {
        ...state,
        results: action.payload
      };
    default:
      return state;
  }
}
