import { combineReducers } from 'redux';
import userReducer from './user-reducer';

//combines various reducers into 'rootreducer'
//userInfo consists of users(array of all users)
export const rootreducer = combineReducers({
  userInfo : userReducer
})