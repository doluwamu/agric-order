import React from "react";
import { Route, Switch } from "react-router-dom";
import ProductPage from "../pages/ProductPage";
import ProductDetail from "../pages/ProductDetail";
import LoginPage from "../pages/LoginPage";
import CartPage from "pages/CartPage";
import SignUp from "pages/SignUp";
import ResetPassword from "pages/ResetPassword";
import LogoutPage from "pages/LogoutPage";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact={true}>
        <ProductPage />
      </Route>
      <Route path="/reset-password" exact={true}>
        <ResetPassword />
      </Route>
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route path="/logout">
        <LogoutPage />
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
      <Route path="/product/:id">
        <ProductDetail />
      </Route>
      <Route path="/cart/:id?">
        <CartPage />
      </Route>
    </Switch>
  );
}

export default Routes;
