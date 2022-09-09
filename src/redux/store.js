import { configureStore } from '@reduxjs/toolkit';

import contactsReducer from './contacts-slice';
import filterReducer from './filter-slice';

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
// });

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
