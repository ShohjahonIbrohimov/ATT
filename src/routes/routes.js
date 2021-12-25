import React from "react";
import { Login, Dashboard } from "../pages";
import Home from "../components/Admin/Home/Main";
import Sample from "../components/Admin/Orders/Sample";
import Main from "../components/Admin/Students/Main";
import TeacherGroups from "../components/Teacher/Groups/TeacherGroups";

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
    path: "/dashboard/3",
    key: "APP_ORDERS",
    exact: true,
    component: () => <Sample />,
  },
  {
    path: "/dashboard/3/groups",
    key: "APP_ORDERS",
    exact: true,
    component: () => <Sample />,
  },
  {
    path: "/dashboard/3/att",
    key: "APP_ORDERS",
    exact: true,
    component: () => <Main />,
  },
];

export const TEACHER_ROUTES = [
  {
    path: "/dashboard/2",
    key: "APP_ORDERS",
    exact: true,
    component: () => <TeacherGroups />,
  },
  {
    path: "/dashboard/2/groups",
    key: "APP_ORDERS",
    exact: true,
    component: () => <TeacherGroups />,
  },
];
