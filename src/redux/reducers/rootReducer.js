import { combineReducers } from 'redux';
import * as plp from './plpReducer';

export default combineReducers({
  plp: plp.reducer
});