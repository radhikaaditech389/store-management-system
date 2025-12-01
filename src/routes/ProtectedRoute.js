import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const storedData = localStorage.getItem("user_detail");
  const userDetail = storedData ? JSON.parse(storedData) : null;

  const token = userDetail?.token;

  return (
    <Route
      {...rest}
      render={(props) =>
        token ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default ProtectedRoute;
