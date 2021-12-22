import React from "react";
import styles from "../../styles/Auth/AuthLayout.module.css";
import Loginform from "./Loginform";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const AuthLayout = () => {
  const authenticated = useSelector((state) => state.authReducer.authenticated);
  const status = useSelector((state) => state?.authReducer.status);

  return (
    <div className={styles.background}>
      {authenticated && status && <Redirect to={`/dashboard/${status}`} />}
      <Loginform />
    </div>
  );
};

export default AuthLayout;
