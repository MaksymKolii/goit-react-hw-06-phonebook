import { contactsReducer } from './contacts/contactsSlice';
import { filterReducer } from './filter/filterSlice';
import { configureStore } from '@reduxjs/toolkit';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsPersistConfig = {
  key: 'contacts',
  storage,
};
const contactsPersistedReducer = persistReducer(
  contactsPersistConfig,
  contactsReducer
);

export const store = configureStore({
  reducer: {
    contacts: contactsPersistedReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
