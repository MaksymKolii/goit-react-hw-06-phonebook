import { createStore, combineReducers } from 'redux';
import { contactReducer } from './contacts/contacts-redusers';
import { filterReducer } from './filter/filter-redusers';
import { devToolsEnhancer } from '@redux-devtools/extension';

// const initialState = {
//   contacts: [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
//   filters: '',
// };
const enhancer = devToolsEnhancer();

const rootReduser = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
});

export const store = createStore(rootReduser, enhancer);

// const rootReducer = (state = initialState, action) => {
//   return state;
// };
