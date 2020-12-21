import { combineReducers } from "redux";
const initFetchingReducer = () => {
  const dataFetched = (state = [], action) => {
    debugger;
    switch (action.type) {
      case "REQUEST_PRODUCT":
        debugger;
        return [];
      case "REQUEST_PRODUCT_COMPLETE":
        debugger;
        return action.products;
      default:
        return state;
    }
  };
  const fetchingData = (state = false, action) => {
    switch (action.type) {
      case "REQUEST_PRODUCT":
        return true;
      case "REQUEST_PRODUCT_COMPLETE":
        return false;
      default:
        return state;
    }
  };

  return combineReducers({ dataFetched, fetchingData });
};

const product = initFetchingReducer();

export default product;
