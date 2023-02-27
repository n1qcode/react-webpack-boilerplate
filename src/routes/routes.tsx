import { createBrowserRouter, Navigate } from "react-router-dom";
import { lazy } from "react";

import AuthProvider from "../providers/AuthProvider";
import LocaleProvider from "../providers/LocaleProvider";

import { RouteNames } from "./routes.enum";
import publicPages from "./public";
import privatePages from "./private";

const Layout = lazy(() => import("../layout/Layout"));

const router = createBrowserRouter([
  {
    path: RouteNames.HOME,
    element: (
      <AuthProvider>
        <LocaleProvider>
          <Layout />
        </LocaleProvider>
      </AuthProvider>
    ),
    children: [...publicPages, ...privatePages],
  },
  {
    path: "*",
    element: <Navigate to={RouteNames.HOME} />,
  },
]);

export default router;
