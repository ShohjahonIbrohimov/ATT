import React from "react";
import { Login, Dashboard } from "../pages";
import Home from "../components/Admin/Home/Main";
import Sample from "../components/Admin/Orders/Sample";
import Main from "../components/Admin/Students/Main";

export const ROUTES = [
  {
    path: "/",
    key: "APP_LOGIN",
    exact: true,
    component: () => <Login />,
  },
  {
    path: "/dashboard",
    key: "APP_DASHBOARD",
    exact: false,
    component: () => <Dashboard />,
  },
];

export const ADMIN_ROUTES = [
  {
    path: "/dashboard/students",
    key: "APP_DASHBOARD",
    exact: true,
    component: () => <Main />,
  },
  {
    path: "/dashboard/orders",
    key: "APP_ORDERS",
    exact: true,
    component: () => <Sample />,
  },
];
