import { combineReducers } from "redux";

const InitLikeProductReducer = () => {
  //   debugger;
  const likeProductSuccess = (state = [], action) => {
    // debugger;
    switch (action.type) {
      case "LIKE_PRODUCT":
        // return [...state, action.data];
        return action.data;
      case "REMOVE_LIKE":
        return action.data;
      default:
        return state;
    }
  };

  return combineReducers({
    likeProductSuccess,
  });
};

const likeProduct = InitLikeProductReducer();

export default likeProduct;
