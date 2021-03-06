import { combineReducers } from "redux";

const InitCartReducer = () => {
  const gettingCartItems = (state = false, action) => {
    switch (action.type) {
      case "GETTING_CART_ITEMS":
        return true;
      case "GET_CART_ITEMS_FAIL":
      case "GET_CART_ITEMS_SUCCESS":
        return false;
      default:
        return state;
    }
  };

  const getCartItemsSuccess = (state = [], action) => {
    switch (action.type) {
      case "GETTING_CART_ITEMS":
        return [];
      case "GET_CART_ITEMS_SUCCESS":
        return action.data;
      case "REMOVE_CART_ITEM":
        return state.filter(
          (cartItem) => cartItem.product._id !== action.product.product._id
        );
      case "CLEAR_CART":
        // const cartItems = [...state];
        state.slice(0, state.length);
        return [];
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
