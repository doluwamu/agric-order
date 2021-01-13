import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import products from "./reducers/products";
import product from "./reducers/product";
import cart from "./reducers/cart";
import auth from "./reducers/auth";
import register from "./reducers/registerStatus";
import productCategories from "./reducers/productCategories";
import Cookie from "js-cookie";

const cartItems = Cookie.getJSON("cartItems") || [];
export function initStore() {
  const initialState = { cart: { cartItems } };
  const reducers = combineReducers({
    products,
    product,
    register,
    cart,
    auth,
    productCategories,
  });

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
}
