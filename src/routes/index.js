import React, { useEffect } from "react";
// ROUTE
import { Switch, Route } from "react-router-dom";
import { ROUTES } from "./routes";
import ProtectedRoute from "./protected.route";
import { setSession } from "../utils/utils";

const App = () => {
  return (
    <Switch>
      {ROUTES.map((route) => {
        if (route.key === "APP_DASHBOARD") {
          return <ProtectedRoute {...route} component={route.component} />;
        } else {
          return <Route {...route} key={route.key} />;
        }
      })}
    </Switch>
  );
};

export default App;
