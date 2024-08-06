import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import HomePage from "./pages/HomePage";
import BaseLayout from "./layouts/BaseLayout";
import { syncThemeWithLocal } from "./helpers/theme_helpers";
import { useTranslation } from "react-i18next";
import "./localization/i18n";
import { updateAppLanguage } from "./helpers/language_helpers";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/Login";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <Login />,
  }
]);

export default function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    syncThemeWithLocal();
    updateAppLanguage(i18n);
  }, []);

  return (
    <BaseLayout>
      <RouterProvider router={router} />
    </BaseLayout>
  );
}

const root = createRoot(document.getElementById("app")!);
root.render(<App />);
