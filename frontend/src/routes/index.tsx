import Dashboard from "@/pages/dashboard";
import JWTDecode from "@/pages/jwt-decode";
import { RouteObject } from "react-router-dom";

const routes: RouteObject[] = [
  {
    path: '/',
    Component: Dashboard
  },
  {
    path: '/jwt',
    Component: JWTDecode
  }
]

export default routes