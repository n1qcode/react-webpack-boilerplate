import { RootState } from "../../store";

export const selectIsAuth = (state: RootState) => state.authReducer.isAuth;
export const selectUser = (state: RootState) => state.authReducer.user;
