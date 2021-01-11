const cart = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case "ADD_ITEM_TO_CART":
      const item = action.item;
      const product = state.cartItems.find((x) => x.product === item.product);
      if (product) {
        return {
          cartItems: state.cartItems.map((cartItem) =>
            cartItem.product === product.product ? item : cartItem
          ),
        };
      }
      return { cartItems: [...state.cartItems, item] };

    case "REMOVE_CART_ITEM":
      return {
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.product !== action.product
        ),
      };
    default:
      return state;
  }
};

export default cart;
