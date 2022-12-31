import { useNavigate } from "react-router-dom";
import { FC, useEffect } from "react";

import { useAppSelector } from "../../store/hooks";
import { RouteNames } from "../../routes/routes.enum";

import { IAuthGuard } from "./AuthGuard.typings";

const AuthGuard: FC<IAuthGuard> = (props) => {
  const { children } = props;
  const { isAuth } = useAppSelector((state) => state.authReducer);
  const router = useNavigate();

  useEffect(() => {
    if (!isAuth) router(RouteNames.GUEST);
  }, []);

  useEffect(() => {
    if (isAuth) router(RouteNames.HOME);
  }, [isAuth]);

  return <>{children}</>;
};

export default AuthGuard;
