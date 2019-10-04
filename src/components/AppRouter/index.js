import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { routerHistory } from "../../store";
import PrivateRoute from "./PrivateRoute";
import Login from "../../pages/Login";
import ResetPassword from "../../pages/ResetPassword";
import ChangePassword from "../../pages/ChangePassword";
import NotFound from "../../pages/NotFound";

const AppRouter = () => (
  <Router history={routerHistory}>
    <Switch>
      <PrivateRoute
        path="/"
        exact
        component={() => <Redirect to="/" />}
      />
      <Route path="/login" component={Login} />
      <Route path="/reset-password" component={ResetPassword} />
      <Route component={NotFound} />
      <PrivateRoute path="/change-password" component={ChangePassword} />
    </Switch>
  </Router>
);

export default AppRouter;
