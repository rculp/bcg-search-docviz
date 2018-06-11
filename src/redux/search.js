const CHANGE_SEARCH_VALUE = 'CHANGE_SEARCH_VALUE';

const initialState = {
  searchValue: ''
};

export const actions = {
  changeSearchValue: payload => ({ type: CHANGE_SEARCH_VALUE, payload })
};

export const selectors = {
  getSearchValue: state => state.search.searchValue
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.payload
      };

    default:
      return state;
  }
}