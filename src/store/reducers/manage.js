import { combineReducers } from "redux";
import { createList } from "./productsCommon";

const initManageReducer = () => {
  return combineReducers({
    products: createList("manage-products"),
  });
};

const manage = initManageReducer();
export default manage;
