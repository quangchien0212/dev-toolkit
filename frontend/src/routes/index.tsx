import Dashboard from "@/pages/dashboard";
import ErrorPage from "@/pages/error-page";
import Notes from "@/pages/notes";
import { RouteObject } from "react-router-dom";

const routes: RouteObject[] = [
  {
    path: '/',
    Component: Dashboard,
    ErrorBoundary: ErrorPage
  },
  {
    path: '/notes',
    Component: Notes,
    ErrorBoundary: ErrorPage
  },
]

export default routes