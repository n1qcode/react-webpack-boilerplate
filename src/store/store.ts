import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import logging from "./middlewares/logging";
import rootReducer from "./reducers";
import authApi from "./api/auth.api";

const middlewares = [logging, authApi.middleware];

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewares),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
