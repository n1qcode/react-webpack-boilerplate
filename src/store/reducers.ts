import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "./slices/auth/auth.slice";

const rootReducer = combineReducers({
  authReducer,
});

export default rootReducer;
