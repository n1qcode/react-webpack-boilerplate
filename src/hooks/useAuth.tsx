import { Navigate, RouteObject } from "react-router-dom";
import { ReactNode, useEffect } from "react";

import privatePages from "../routes/private";
import publicPages from "../routes/public";
import { PrivateRoutes, PublicRoutes } from "../routes/routes.enum";
import { login } from "../store/slices/auth/auth.slice";
import { selectIsAuth } from "../store/slices/auth/selectors";

import useAppSelector from "./redux/useAppSelector";
import useAppDispatch from "./redux/useAppDispatch";

const useAuth = (): [RouteObject[], ReactNode] => {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(selectIsAuth);
  const routes = isAuth ? privatePages : publicPages;
  const initialContent = isAuth ? (
    <Navigate to={PrivateRoutes.START} />
  ) : (
    <Navigate to={PublicRoutes.LOGIN} />
  );

  useEffect(() => {
    const userName = localStorage.getItem("user");
    if (userName) {
      dispatch(
        login({ isAuth: true, user: { login: userName, role: "admin" } })
      );
    }
  }, []);

  return [routes, initialContent];
};

export default useAuth;
