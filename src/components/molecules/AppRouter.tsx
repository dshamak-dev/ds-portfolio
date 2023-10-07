import React, { lazy } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const LandingPage = lazy(() =>
  import('src/namespaces/landing/components/LandingPage').then((module) => ({ default: module.LandingPage }))
);

const ROUTER = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={ROUTER} />;
};
