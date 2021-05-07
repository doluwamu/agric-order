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
  return combineReducers({
    getCartItemsSuccess,
    gettingCartItems,
  });
};

const cart = InitCartReducer();

export default cart;

// case "ADD_ITEM_TO_CART":
//   const item = action.item;

//   // const isCartItem = state.cartItems && state.cartItems !== undefined;

//   const product = state.cartItems.find(
//     (cartItem) => cartItem.product === item.product
//   );
//   if (product) {
//     return {
//       ...state,
//       cartItems: state.cartItems.map((cartItem) => {
//         return cartItem.product === product.product ? item : cartItem;
//       }),
//     };
//   }
// return { cartItems: [...state.cartItems, item] };

// case "REMOVE_CART_ITEM":
//   return {
//     cartItems: state.cartItems.filter(
//       (cartItem) => cartItem.product !== action.product
//     ),
//   };
