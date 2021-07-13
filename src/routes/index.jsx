import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import SpecificProduct from "../pages/SpecificProduct";

import Home from "../pages/Home";
import Register from "../pages/Register";
import UserCart from "../pages/UserCart";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Signup} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/specificProduct" component={SpecificProduct} />
      <Route exact path="/cart" component={UserCart} />

      <Route exact path="/register" component={Register} />
    </Switch>
  );
};

export default Routes;
