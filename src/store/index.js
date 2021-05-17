import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import products from "./reducers/products";
import manage from "./reducers/manage";
import cart from "./reducers/cart";
import auth from "./reducers/auth";
import register from "./reducers/registerStatus";
import productCategories from "./reducers/productCategories";
import likeProduct from "./reducers/likeProduct";

export function initStore() {
  const reducers = combineReducers({
    products,
    manage,
    register,
    cart,
    auth,
    productCategories,
    likeProduct,
  });

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

  return store;
}
