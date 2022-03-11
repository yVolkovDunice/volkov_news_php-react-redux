import { combineReducers } from 'redux';

import authReducer from './authReducer';
import postReducer from './postReducer';
// import userReducer from './userReducer';

const rootReducer = combineReducers({
  posts: postReducer,
  // users: userReducer,
  auth: authReducer,
});
export default rootReducer;
