import { combineReducers } from "redux";
import {
  fetchingFailReducer,
  fetchingReducer,
  fetchingSuccessReducer,
} from "./productsCommon";
const initProductIdReducer = () => {
  const fetchProductById = "fetch-product-by-id";
  const fetchedData = fetchingSuccessReducer(fetchProductById);

  const dataFetchingFail = fetchingFailReducer(fetchProductById);

  const datafetching = fetchingReducer(fetchProductById);

  return combineReducers({ fetchedData, datafetching, dataFetchingFail });
};

const product = initProductIdReducer();

export default product;

// const product = (state = [], action) => {
//   switch (action.type) {
//     case "REQUEST_PRODUCT":
//       return [];
//     case "REQUEST_PRODUCT_COMPLETE":
//       return action.product;
//     default:
//       return state;
//   }
// };
