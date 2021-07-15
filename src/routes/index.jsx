import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import BuildYourPc from "../pages/BuildYourPc";
import SpecificProduct from "../pages/SpecificProduct";
import Profile from "../pages/Profile";
import Wallet from "../pages/Wallet"
import AboutUs from "../pages/AboutUs";
import Register from "../pages/Register";

import Home from "../pages/Home";
import UserCart from "../pages/UserCart";

import Styleguide from "../components/Styleguide";
import WithdrawMoney from "../pages/withdrawalMoney";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      {/* <Route exact path="/dashboard" component={Dashboard} /> */}
      <Route exact path="/home" component={Home} />
      <Route exact path="/build-your-pc" component={BuildYourPc} />
      <Route exact path="/specificProduct" component={SpecificProduct} />
      <Route exact path="/cart" component={UserCart} />
      <Route exact path="/aboutUs" component={AboutUs} />
      <Route exact path="/styleguide" component={Styleguide} />
      <Route exact path="/wallet" component={Wallet} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/withdrawMoney" component={WithdrawMoney} />
    </Switch>
  );
};

export default Routes;
