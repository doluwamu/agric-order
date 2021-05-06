const cart = (state = { cartItems: [] }, action) => {
  // debugger;
  switch (action.type) {
    case "GET_CART_ITEMS_SUCCESS":
      return action.data;

    // case "REMOVE_CART_ITEM":
    //   return {
    //     cartItems: state.cartItems.filter(
    //       (cartItem) => cartItem.product !== action.product
    //     ),
    //   };
    default:
      return state;
  }
};

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
