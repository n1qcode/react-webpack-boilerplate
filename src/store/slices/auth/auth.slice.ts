import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IAuth, IUser } from "./auth.slice.typings";

const initialUser: IUser = {
  role: "guest",
};

const initialState: IAuth = {
  isAuth: false,
  user: initialUser,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state: IAuth, action: PayloadAction<IAuth>) => {
      state.isAuth = action.payload.isAuth;
      state.user = action.payload.user;

      const userName = action?.payload?.user.login;
      if (userName) localStorage.setItem("user", userName);
    },
    logout: (state: IAuth) => {
      state.isAuth = false;
      state.user = initialUser;
      localStorage.removeItem("user");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
