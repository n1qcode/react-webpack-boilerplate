import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { LocalStorageEnum } from "../../../enums/localStorage.enums";

import { UserRolesEnum } from "./auth.enums";
import { IAuth, IUser } from "./auth.typings";

const initialUser: IUser = {
  role: UserRolesEnum.GUEST,
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
      if (userName) localStorage.setItem(LocalStorageEnum.USER, userName);
    },
    logout: (state: IAuth) => {
      state.isAuth = false;
      state.user = initialUser;
      localStorage.removeItem(LocalStorageEnum.USER);
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
