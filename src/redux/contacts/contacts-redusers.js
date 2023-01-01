import { ADD_CONTACT, DELETE_CONTACT } from './contacts-types';

export const contactReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_CONTACT:
      return [payload, ...state];
    case DELETE_CONTACT:
      return state.filter(({ id }) => id !== payload);

    default:
      return state;
  }
};
