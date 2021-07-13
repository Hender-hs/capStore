import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import SpecificProduct from "../pages/SpecificProduct";
import Profile from "../pages/Profile";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Styleguide from "../components/Styleguide";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Signup} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/specificProduct" component={SpecificProduct} />
      <Route exact path="/styleguide" component={Styleguide} />

      <Route exact path="/register" component={Register} />
      <Route exact path="/profile" component={Profile} />
    </Switch>
  );
};

export default Routes;
