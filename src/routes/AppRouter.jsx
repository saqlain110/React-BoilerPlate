import React from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import ErrorPage from "../pages/error";
import AuthLayout from "../components/layouts/AuthLayout";
import Login from "../pages/auth/Login";
import AdminLayout from "../components/layouts/AdminLayout";
import Dashboard from "../pages/admin/Dashboard";
import Users from "../pages/admin/Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={"/auth/login"} replace />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/auth",
    // loader: getMe,
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Navigate to={"/auth/login"} replace />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/admin",
    // loader: getMe,
    element: <AdminLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Navigate to={"/admin/dashboard"} replace />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    
      {
        path: "users",
        element: <Users />,
      }
    ],
  },
]);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
