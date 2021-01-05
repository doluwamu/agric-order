import { combineReducers } from "redux";

const initProductReducer = () => {
  const categoriesFetched = (state = [], action) => {
    switch (action.type) {
      case "FETCHED_PRODUCT_CATEGORIES":
        return action.categories;
      default:
        return state;
    }
  };

  return combineReducers({ categoriesFetched });
};

const productCategories = initProductReducer();

export default productCategories;
