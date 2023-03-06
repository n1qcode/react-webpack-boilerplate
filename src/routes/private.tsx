import { lazy } from "react";

import { PrivateRoutes } from "./routes.enum";

const Start = lazy(() => import("../content/private/Start"));

const privateContent = [
  {
    path: PrivateRoutes.START,
    element: <Start />,
  },
];

export default privateContent;
