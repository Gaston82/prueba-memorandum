import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage/HomePage";
import SeriesPage from "../pages/SeriesPage/SeriesPage";

export const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "/series",
        element: <SeriesPage />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
