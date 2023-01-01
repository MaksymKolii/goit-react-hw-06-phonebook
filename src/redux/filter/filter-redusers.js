const filtersInitialState = {
  filter: '',
};

export const filterReducer = (
  state = filtersInitialState,
  { type, payload }
) => {
  switch (type) {
    case 'filters/filter':
      return {
        state: payload,
      };
    default:
      return state;
  }
};
