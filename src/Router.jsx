import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Blue from "./Blue";
import Red from "./Red";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/Blue",
        element: <Blue />,
      },
      {
        path: "/Red",
        element: <Red />,
      },
    ],
  },
]);

export default router;
