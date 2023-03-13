import { combineReducers } from "@reduxjs/toolkit";

import authApi from "./api/auth.api";
import authReducer from "./slices/auth/auth.slice";
import localeReducer from "./slices/locale/locale.slice";
import themeReducer from "./slices/theme/theme.slice";

const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  authReducer,
  localeReducer,
  themeReducer,
});

export default rootReducer;
