// import { createReducer } from '@reduxjs/toolkit';
// import { setFilter } from './filter-actions';

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

// export const filterReducer = createReducer(filtersInitialState, {

//   [setFilter]: (state, {payload}) => state= payload
// })
