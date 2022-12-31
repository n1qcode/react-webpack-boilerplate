import { createBrowserRouter, Navigate } from "react-router-dom";
import { lazy } from "react";

import AuthGuard from "../components/AuthGuard/AuthGuard";

import { RouteNames } from "./routes.enum";

const Login = lazy(() => import("../pages/public/Login"));
const SignUp = lazy(() => import("../pages/public/SignUp"));
const Start = lazy(() => import("../pages/private/Start"));
const Layout = lazy(() => import("../layout/Layout"));

const router = createBrowserRouter([
  {
    path: RouteNames.HOME,
    element: (
      <AuthGuard>
        <Layout />
      </AuthGuard>
    ),
    children: [
      {
        path: RouteNames.HOME,
        element: <Navigate to={RouteNames.START} />,
      },
      {
        path: RouteNames.GUEST,
        element: <Login />,
        children: [
          {
            path: RouteNames.GUEST,
            element: <Navigate to={RouteNames.LOGIN} />,
          },
          {
            path: RouteNames.LOGIN,
            element: <Login />,
          },
          {
            path: RouteNames.SIGNUP,
            element: <SignUp />,
          },
        ],
      },
      {
        path: RouteNames.START,
        element: <Start />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to={RouteNames.HOME} />,
  },
]);

export default router;
