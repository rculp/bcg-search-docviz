const initialState = {
  test: null
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case `TEST`:
      return {
        ...state,
        test: action.test
      };

    default:
      return state;
  }
}

export const actions = {
  setSearchValue: payload => ({ type: 'TEST', payload })
};

export const selectors = {
  getSearchValue: state => state.test
};
