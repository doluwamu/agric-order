import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import products from "./reducers/products";
import product from "./reducers/product";
import cart from "./reducers/cart";
import register from "./reducers/registerStatus";

export function initStore() {
  const reducers = combineReducers({
    products,
    product,
    register,
    cart,
  });

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

  return store;
}
