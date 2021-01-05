import { combineReducers } from "redux";

const initProductReducer = () => {
  const dataFetched = (state = [], action) => {
    switch (action.type) {
      case "REQUEST_DATA":
        return [];
      case "REQUEST_DATA_COMPLETE":
        return action.products;
      case "FETCHED_PRODUCT_CATEGORIES":
        return action.categories;
      default:
        return state;
    }
  };

  const fetchingData = (state = false, action) => {
    switch (action.type) {
      case "REQUEST_DATA":
        return true;

      case "REQUEST_DATA_COMPLETE":
        return false;
      default:
        return state;
    }
  };

  return combineReducers({ dataFetched, fetchingData });
};

const products = initProductReducer();

export default products;
