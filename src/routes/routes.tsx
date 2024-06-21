import * as React from 'react'
import { RouteObject } from "react-router-dom";
import ErrorPage from "../pages/error-page";
import Notes from '@/pages/Notes';

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Notes />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/notes",
    element: <Notes />,
    errorElement: <ErrorPage />,
  },
]

export default routes
