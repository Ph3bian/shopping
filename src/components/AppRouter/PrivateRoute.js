import React from "react";
import { Route, Redirect } from "react-router-dom";
import ErrorBoundary from "../ErrorBoundary";
import { Layout } from "../Layout";

const PrivateRoute = ({
  component: Component,
  title,
  renderHeader,
  ...rest
}) => {
  const isAuthenticated = localStorage.getItem("authToken")
    ? true
    : false;

  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <ErrorBoundary>
            <Layout>
              <Component {...props} />
            </Layout>
          </ErrorBoundary>
        ) : (
            <Redirect to="/login" />
          )
      }
    />
  );
};

export default PrivateRoute;
