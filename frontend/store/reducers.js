import { combineReducers } from 'redux';
import authReducer from './authReducer';
import repuestos from './repuestosReducer';

export default combineReducers({
  repuestos,
  authReducer,
});
