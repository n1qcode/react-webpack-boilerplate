import { lazy } from "react";

import { RouteNames } from "./routes.enum";

const Start = lazy(() => import("../pages/private/Start"));

const privatePages = [
  {
    path: RouteNames.START,
    element: <Start />,
  },
];

export default privatePages;
