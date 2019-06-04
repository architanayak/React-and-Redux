import { combineReducers } from 'redux';
import studentReducer from './student-reducer';

const rootReducer = combineReducers({
    studentInfo: studentReducer,
  });
  
  export default rootReducer;