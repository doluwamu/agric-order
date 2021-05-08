import { combineReducers } from "redux";

const InitCartReducer = () => {
  const gettingCartItems = (state = false, action) => {
    switch (action.type) {
      case "GETTING_CART_ITEMS":
        return true;
      case "CHANGE_CART_QUANTITY":
      case "GET_CART_ITEMS_FAIL":
      case "GET_CART_ITEMS_SUCCESS":
        return false;
      default:
        return state;
    }
  };

  const getCartItemsSuccess = (state = [], action) => {
    // debugger;
    switch (action.type) {
      case "GETTING_CART_ITEMS":
        return [];
      case "GET_CART_ITEMS_SUCCESS":
        return action.data;
      default:
        return state;
    }
  };

  const getCartItemsFail = (state = [], action) => {
    switch (action.type) {
      case "GETTING_CART_ITEMS":
        return [];
      case "GET_CART_ITEMS_FAIL":
        return action.message;
      default:
        return state;
    }
  };

  const changeCartQuantity = (state = [], action) => {
    switch (action.type) {
      case "GETTING_CART_ITEMS":
        return [];
      case "CHANGE_CART_QUANTITY":
        return action.data;
      default:
        return state;
    }
  };

  return combineReducers({
    gettingCartItems,
    getCartItemsSuccess,
    getCartItemsFail,
    changeCartQuantity,
  });
};

const cart = InitCartReducer();

export default cart;
