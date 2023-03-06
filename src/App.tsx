import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";

import AppRouter from "./routes/routes";

const App = () => {
  const routes = AppRouter();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={routes} />
    </Suspense>
  );
};
export default App;
