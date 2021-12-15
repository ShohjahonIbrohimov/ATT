import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const authenticated = useSelector((state) => state.authReducer.authenticated);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (authenticated) {
          return <Component {...props} />;
        } else {
          return <Redirect to='/' />;
        }
      }}
    />
  );
};

export default ProtectedRoute;
