import { lazy } from "react";

import { RouteNames } from "./routes.enum";

const Login = lazy(() => import("../pages/public/Login"));
const SignUp = lazy(() => import("../pages/public/SignUp"));

const publicPages = [
  {
    path: RouteNames.LOGIN,
    element: <Login />,
  },
  {
    path: RouteNames.SIGNUP,
    element: <SignUp />,
  },
];

export default publicPages;
