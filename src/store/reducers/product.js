import { combineReducers } from "redux";
const initProductIdReducer = () => {
  const fetchedData = (state = [], action) => {
    switch (action.type) {
      case "REQUEST_PRODUCT":
        return [];
      case "REQUEST_PRODUCT_COMPLETE":
        return action.data;
      default:
        return state;
    }
  };

  const datafetching = (state = false, action) => {
    switch (action.type) {
      case "REQUEST_PRODUCT":
        return true;
      case "REQUEST_PRODUCT_COMPLETE":
        return false;
      default:
        return state;
    }
  };

  return combineReducers({ fetchedData, datafetching });
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
