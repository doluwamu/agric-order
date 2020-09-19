import { createStore, combineReducers } from "redux";
import products from "./reducers/products";
import product from "./reducers/product";
import cart from "./reducers/cart";

export function initStore() {
  const reducers = combineReducers({
    products,
    product,
    cart,
  });

  const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
}
