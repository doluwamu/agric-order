import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import products from "./reducers/products";
import manage from "./reducers/manage";
import cart from "./reducers/cart";
import auth from "./reducers/auth";
import register from "./reducers/registerStatus";
import productCategories from "./reducers/productCategories";

export function initStore() {
  const reducers = combineReducers({
    products,
    manage,
    register,
    cart,
    auth,
    productCategories,
  });

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

  return store;
}
