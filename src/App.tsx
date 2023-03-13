import { RouterProvider } from "react-router-dom";
import { Suspense } from "react";

import AppRouter from "./routes/routes";
import GlobalLoader from "./layout/GlobalLoader";

const App = () => {
  const routes = AppRouter();
  return (
    <Suspense fallback={<GlobalLoader />}>
      <RouterProvider router={routes} />
    </Suspense>
  );
};
export default App;
