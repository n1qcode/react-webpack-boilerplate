import { lazy } from "react";

import { PublicRoutes } from "./routes.enum";

const Login = lazy(() => import("../content/public/Login"));
const SignUp = lazy(() => import("../content/public/SignUp"));

const publicContent = [
  {
    path: PublicRoutes.LOGIN,
    element: <Login />,
  },
  {
    path: PublicRoutes.SIGNUP,
    element: <SignUp />,
  },
];

export default publicContent;
