import { combineReducers } from "redux";
import { createList } from "./productsCommon";

const initProductReducer = () => {
  return combineReducers({
    allProducts: createList("fetch-products"),
    selectedProduct: createList("fetch-product-by-id"),
  });
};

const products = initProductReducer();

export default products;
