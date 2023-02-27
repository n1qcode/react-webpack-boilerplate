import { combineReducers } from "@reduxjs/toolkit";

import authApi from "./api/auth.api";
import authReducer from "./slices/auth/auth.slice";
import localeReducer from "./slices/locale/locale.slice";

const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  authReducer,
  localeReducer,
});

export default rootReducer;
