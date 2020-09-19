import React from "react";
import { Route, Switch } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import ProductDetail from "./pages/ProductDetail";
import LoginPage from "./pages/LoginPage";
import CartPage from "pages/CartPage";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact={true}>
        <ProductPage />
      </Route>
      <Route path="/login">
        <LoginPage />
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
