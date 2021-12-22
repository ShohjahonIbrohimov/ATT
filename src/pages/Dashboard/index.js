import React, { useEffect, useState } from "react";
import DashboardLayout from "../../components/Dashboard/DashboardLayout";
import { refresh } from "../../redux/auth/thunks";
import { useDispatch, useSelector } from "react-redux";
import { LoadingOutlined } from "@ant-design/icons";
import { logout } from "../../redux/auth/authSlice";

const Dashboard = () => {
  const [loading, setloading] = useState(true);
  const dispatch = useDispatch();

  const onError = () => {
    setloading(false);
    dispatch(logout());
  };

  const onSuccess = () => {
    setloading(false);
  };

  useEffect(() => {
    setloading(true);
    const refreshToken = window.localStorage.getItem("refreshToken");
    dispatch(refresh({ refreshToken, onSuccess, onError }));
  }, []);

  return loading ? (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1 style={{ margin: "0" }}>Authenticating</h1>
        <LoadingOutlined style={{ fontSize: 40, marginLeft: "1.5rem" }} />
      </div>
    </div>
  ) : (
    <DashboardLayout />
  );
};

export default Dashboard;
