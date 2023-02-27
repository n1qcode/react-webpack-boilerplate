import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";

import router from "./routes/routes";

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};
export default App;
