import { useNavigate } from "react-router-dom";
import { FC, useEffect } from "react";

import { RouteNames } from "../../routes/routes.enum";
import useAppSelector from "../../hooks/redux/useAppSelector";
import useAppDispatch from "../../hooks/redux/useAppDispatch";
import { login } from "../../store/slices/auth/auth.slice";

import { IAuthProvider } from "./AuthProvider.typings";

const AuthProvider: FC<IAuthProvider> = (props) => {
  const { children } = props;
  const dispatch = useAppDispatch();
  const { isAuth } = useAppSelector((state) => state.authReducer);
  const router = useNavigate();

  useEffect(() => {
    const isAuthStored = localStorage.getItem("auth");
    if (isAuthStored) {
      dispatch(login({ isAuth: true }));
    }
  }, []);

  useEffect(() => {
    if (isAuth) router(RouteNames.START);
    else router(RouteNames.LOGIN);
  }, [isAuth]);

  return <>{children}</>;
};

export default AuthProvider;
