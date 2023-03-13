import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

import LocaleProvider from "../providers/LocaleProvider";
import useAuth from "../hooks/useAuth";
import ThemeProvider from "../providers/ThemeProvider";

import { RouteNames } from "./routes.enum";

const Layout = lazy(() => import("../layout/Layout"));

const AppRouter = () => {
  const [routes, initialContent] = useAuth();

  return createBrowserRouter([
    {
      path: RouteNames.ROOT,
      element: (
        <ThemeProvider>
          <LocaleProvider>
            <Layout />
          </LocaleProvider>
        </ThemeProvider>
      ),
      children: [
        {
          path: RouteNames.ROOT,
          element: initialContent,
        },
        ...routes,
      ],
    },
    {
      path: "*",
      element: initialContent,
    },
  ]);
};

export default AppRouter;
