import { Navigate, RouteObject } from "react-router-dom";
import { ReactNode, useEffect } from "react";

import privatePages from "../routes/private";
import publicPages from "../routes/public";
import { PrivateRoutes, PublicRoutes } from "../routes/routes.enum";
import { login } from "../store/slices/auth/auth.slice";

import useAppSelector from "./redux/useAppSelector";
import useAppDispatch from "./redux/useAppDispatch";

const useAuth = (): [RouteObject[], ReactNode] => {
  const dispatch = useAppDispatch();
  const { isAuth } = useAppSelector((state) => state.authReducer);
  const routes = isAuth ? privatePages : publicPages;
  const initialContent = isAuth ? (
    <Navigate to={PrivateRoutes.START} />
  ) : (
    <Navigate to={PublicRoutes.LOGIN} />
  );

  useEffect(() => {
    const isAuthStored = localStorage.getItem("auth");
    if (isAuthStored) {
      dispatch(login({ isAuth: true }));
    }
  }, []);

  return [routes, initialContent];
};

export default useAuth;
