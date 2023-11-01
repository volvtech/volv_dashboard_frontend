// reducers/index.js

import { combineReducers } from 'redux';

// Import your individual reducers here
import articleReducer from './articles/reducer';


// Combine the reducers into a root reducer
const rootReducer = combineReducers({
  articles: articleReducer, // Add more reducers as needed
});

export default rootReducer;
