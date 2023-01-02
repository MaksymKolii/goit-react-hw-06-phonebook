// import { ADD_CONTACT, DELETE_CONTACT } from './contacts-types';

// import { createReducer } from '@reduxjs/toolkit';
// import { addContact, deleteContact } from './contacts-actions';

// const initialState = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

// export const contactReducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case ADD_CONTACT:
//       return [payload, ...state];
//     case DELETE_CONTACT:
//       return state.filter(({ id }) => id !== payload);

//     default:
//       return state;
//   }
// };

// export const contactReducer = createReducer(initialState, {
//   [addContact]: (state, action) => [action.payload, ...state],
//   [deleteContact]: (state, { payload }) =>
//     state.filter(({ id }) => id !== payload),
// });
