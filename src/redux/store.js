
import contactsReducer from "../redux/contacts/slice";
import filtersReducer from "../redux/filters/slice";
import { authReducer } from "./auth/slice";

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
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  // key: 'contacts',
  key: 'auth',
  version: 1,
  storage,
  whitelist: ['token'],
}



// export const store = configureStore({
//   reducer: {
//     contacts: persistedReducer,
//     filters: filtersReducer,
//   },
//  
// });


const persistedReducer = persistReducer(persistConfig, authReducer)
export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
    auth: persistedReducer,
  },
   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;