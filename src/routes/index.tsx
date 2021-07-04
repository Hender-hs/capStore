import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Signup} />
      <Route exact path="/login" component={Login} />
    </Switch>
  );
};

export default Routes;
