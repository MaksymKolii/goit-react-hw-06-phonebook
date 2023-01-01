import { createStore, combineReducers } from 'redux';
import { contactReducer } from './contacts/contacts-redusers';
import { filterReducer } from './filter/filter-redusers';
import { devToolsEnhancer } from '@redux-devtools/extension';

const enhancer = devToolsEnhancer();

const rootReduser = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
});

export const store = createStore(rootReduser, enhancer);
