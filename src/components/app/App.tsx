import { createBrowserRouter } from "react-router-dom";
import "../../styles/global.scss";
import Layout from "../layout/Layout";
import HomePage from "../../pages/home/HomePage";
import NotFound from "../404/NotFound";
import Auth from "../../pages/auth/Auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/auth",
        element: <Auth />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
