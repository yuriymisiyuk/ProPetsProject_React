import { combineReducers } from 'redux';


import  alert  from './alert.reducer';
import request from "./request.reducer";
import user from "./user.reducer";
import token from "./token.reducer";

const rootReducer = combineReducers({
  user,
  token,
  alert,
  request
});

export default rootReducer;