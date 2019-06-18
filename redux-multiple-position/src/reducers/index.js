import { combineReducers } from 'redux';
import userRoles from './reducers';

export const rootreducer = combineReducers({
  userRoles : userRoles
})