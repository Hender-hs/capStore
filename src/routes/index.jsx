import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Styleguide from "../components/Styleguide";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import SpecificProduct from "../pages/SpecificProduct";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Signup} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/styleguide" component={Styleguide} />
      <Route exact path="/specificProduct" component={SpecificProduct} />
    </Switch>
  );
};

export default Routes;
