import React from "react";
import { Route, Switch } from "react-router-dom";
import ProductPage from "../pages/ProductPage";
import ProductDetail from "../pages/ProductDetail";
import LoginPage from "../pages/LoginPage";
import CartPage from "pages/CartPage";
import SignUp from "pages/SignUp";
// import LogoutPage from "pages/LogoutPage";
// import LogoutRoute from "components/auth/LogoutRoute";
import GuestRoute from "components/auth/GuestRoute";
import AuthRoute from "components/auth/AuthRoute";
import ResetPassword from "pages/ResetPassword";
import CreateProductPage from "pages/CreateProductPage";
import NewProductCategoryPage from "pages/NewProductCategoryPage";
import ProductSearchPage from "pages/ProductSearchPage";
import GetUserPage from "pages/GetUserPage";
import HomePage from "pages/HomePage";
import PageNotFound from "pages/PageNotFound";
import MyProductsPage from "pages/MyProductsPage";
import RelatedProductPage from "pages/RelatedProductPage";
import LikedProductsPage from "pages/LikedProductsPage";

function Routes() {
  return (
    <Switch>
      <Route path="/products/:category">
        <ProductSearchPage />
      </Route>

      <Route path="/" exact={true}>
        <HomePage />
      </Route>

      <Route path="/liked-products">
        <LikedProductsPage />
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

      <AuthRoute path="/manage/my-products">
        <MyProductsPage />
      </AuthRoute>

      {/* <AuthRoute path="/logout">
        <LogoutPage />
      </AuthRoute> */}

      <AuthRoute path="/product-create">
        <CreateProductPage />
      </AuthRoute>

      <AuthRoute path="/new-product-category">
        <NewProductCategoryPage />
      </AuthRoute>

      <GuestRoute path="/login">
        <LoginPage />
      </GuestRoute>

      <GuestRoute path="/signup">
        <SignUp />
      </GuestRoute>

      <Route path="/product/:id">
        <ProductDetail />
      </Route>

      <Route path="/related-product/:id/:owner?">
        <RelatedProductPage />
      </Route>

      <AuthRoute path="/cart">
        <CartPage />
      </AuthRoute>

      <Route path="/:noPage">
        <PageNotFound />
      </Route>
    </Switch>
  );
}

export default Routes;
