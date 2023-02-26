import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  redirect,
} from "react-router-dom";
import { AboutPage } from "../pages/AboutPage";
import { ProjectsPage } from "../pages/ProjectsPage";

const ROUTER = createBrowserRouter([
  {
    path: "projects",
    element: <ProjectsPage />,
  },
  {
    path: "about",
    element: <AboutPage />,
  },
  {
    path: "/",
    element: <ProjectsPage />,
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={ROUTER} />;
};
