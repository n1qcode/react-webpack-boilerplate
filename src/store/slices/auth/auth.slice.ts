import { createSlice } from "@reduxjs/toolkit";

import { IAuth } from "./auth.slice.typings";

const initialState: IAuth = {
  isAuth: false,
  role: "guest",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state: IAuth, action) => {
      state.isAuth = action.payload.isAuth;
      state.role = action.payload.role;
      localStorage.setItem("auth", "true");
    },
    logout: (state: IAuth) => {
      state.isAuth = false;
      state.role = "guest";
      localStorage.removeItem("auth");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
