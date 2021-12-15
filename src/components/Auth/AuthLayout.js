import React from "react";
import styles from "../../styles/Auth/AuthLayout.module.css";
import Loginform from "./Loginform";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const AuthLayout = () => {
  const authenticated = useSelector((state) => state.authReducer.authenticated);

  return (
    <div className={styles.background}>
      {authenticated && <Redirect to="/dashboard/orders" />}
      <Loginform />
    </div>
  );
};

export default AuthLayout;
