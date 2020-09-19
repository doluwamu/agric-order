const cart = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case "ADD_ITEM_TO_CART":
      const item = action.cart;
      const product = state.cartItems.find((x) => x.product === item.product);
      if (product) {
        return {
          cartItems: state.cartItems.map((x) =>
            x.product === product.product ? item : x
          ),
        };
      }
      return { cartItems: [...state.cartItems, item] };

    case "REMOVE_CART_ITEM":
      return {
        cartItems: state.cartItems.filter((x) => x.product !== action.product),
      };
    default:
      return state;
  }
};

export default cart;
