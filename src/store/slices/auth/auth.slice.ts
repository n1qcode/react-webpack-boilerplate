import { createSlice } from "@reduxjs/toolkit";

import { IAuth } from "./auth.slice.typings";

const initialState: IAuth = {
  isAuth: false,
  role: "user",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state: IAuth, action) => {
      state.isAuth = action.payload.isAuth;
      state.role = action.payload.role;
    },
    logout: (state: IAuth) => {
      state.isAuth = false;
      state.role = "user";
    },
  },
});

export default authSlice.reducer;
