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
// import ResetPassword from "pages/ResetPassword";
import CreateProductPage from "pages/CreateProductPage";
import NewProductCategoryPage from "pages/NewProductCategoryPage";
import ProductSearchPage from "pages/ProductSearchPage";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact={true}>
        <ProductPage />
      </Route>

      {/* <Route path="/reset-password">
        <ResetPassword />
      </Route> */}

      <AuthRoute path="/product-create">
        <CreateProductPage />
      </AuthRoute>

      <AuthRoute path="/new-product-category">
        <NewProductCategoryPage />
      </AuthRoute>

      <GuestRoute path="/login">
        <LoginPage />
      </GuestRoute>

      <Route path="/logout/35tve6gybbreg7greuyguyf7grggter7gfd87greugerg867ye">
        <LogoutPage />
      </Route>

      <GuestRoute path="/signup">
        <SignUp />
      </GuestRoute>

      <Route path="/product/:id">
        <ProductDetail />
      </Route>

      <Route path="/cart/:id?">
        <CartPage />
      </Route>

      <Route path="/:category">
        <ProductSearchPage />
      </Route>
    </Switch>
  );
}

export default Routes;
