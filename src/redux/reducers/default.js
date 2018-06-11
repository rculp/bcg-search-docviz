const initialState = {
  searchValue: null
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case `CHANGE_SEARCH_VALUE`:
      return {
        ...state,
        searchValue: action.searchValue
      };

    default:
      return state;
  }
}

export const actions = {
  setSearchValue: payload => ({ type: 'CHANGE_SEARCH_VALUE', payload })
};

export const selectors = {
  getSearchValue: state => state.searchValue
};
