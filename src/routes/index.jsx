import React from "react";
import { Route, Switch } from "react-router-dom";
import Styleguide from "../components/Styleguide";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Signup} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/styleguide" component={Styleguide} />
    </Switch>
  );
};

export default Routes;
