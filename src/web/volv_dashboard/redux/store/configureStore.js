// configureStore.js

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../modules/reducer';

// Create the Redux store
const store = configureStore({
  reducer: rootReducer, // Pass in your root reducer
  // You can configure other options here, like middleware and dev tools
});

export default store;
