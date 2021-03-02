import { combineReducers } from 'redux';
import socketReducer from './socketReducer';
import userReducer from './userReducer';

export default combineReducers({
  userData: userReducer,
  socketData: socketReducer,
});
