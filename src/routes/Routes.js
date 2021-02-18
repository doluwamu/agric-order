import React from "react";
import { Route, Switch } from "react-router-dom";
import ProductPage from "../pages/ProductPage";
import ProductDetail from "../pages/ProductDetail";
import LoginPage from "../pages/LoginPage";
import CartPage from "pages/CartPage";
import SignUp from "pages/SignUp";
import LogoutPage from "pages/LogoutPage";
import GuestRoute from "components/auth/GuestRoute";
import AuthRoute from "components/auth/AuthRoute";
import LogoutRoute from "components/auth/LogoutRoute";
import ResetPassword from "pages/ResetPassword";
import CreateProductPage from "pages/CreateProductPage";
import NewProductCategoryPage from "pages/NewProductCategoryPage";
import ProductSearchPage from "pages/ProductSearchPage";
import GetUserPage from "pages/GetUserPage";
import HomePage from "pages/HomePage";
import PageNotFound from "pages/PageNotFound";

function Routes() {
  return (
    <Switch>
      <Route path="/products/:category">
        <ProductSearchPage />
      </Route>

      <Route path="/" exact={true}>
        <HomePage />
      </Route>

      <Route path="/products">
        <ProductPage />
      </Route>

      <GuestRoute path="/reset-password">
        <ResetPassword />
      </GuestRoute>

      <GuestRoute path="/get-user">
        <GetUserPage />
      </GuestRoute>

      <AuthRoute path="/product-create">
        <CreateProductPage />
      </AuthRoute>

      <AuthRoute path="/new-product-category">
        <NewProductCategoryPage />
      </AuthRoute>

      <GuestRoute path="/login">
        <LoginPage />
      </GuestRoute>

      <LogoutRoute path="/logout">
        <LogoutPage />
      </LogoutRoute>

      <GuestRoute path="/signup">
        <SignUp />
      </GuestRoute>

      <Route path="/product/:id">
        <ProductDetail />
      </Route>

      <Route path="/cart">
        <CartPage />
      </Route>

      <Route path="/:page">
        <PageNotFound />
      </Route>
    </Switch>
  );
}

export default Routes;
