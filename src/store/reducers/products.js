import { combineReducers } from "redux";
import {
  fetchingFailReducer,
  fetchingReducer,
  fetchingSuccessReducer,
} from "./productsCommon";

const initProductReducer = () => {
  const fetchProducts = "fetch-products";
  const dataFetched = fetchingSuccessReducer(fetchProducts);

  const dataFetchingFail = fetchingFailReducer(fetchProducts);

  const fetchingData = fetchingReducer(fetchProducts);

  return combineReducers({ dataFetched, fetchingData, dataFetchingFail });
};

const products = initProductReducer();

export default products;
