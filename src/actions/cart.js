import { productData } from "data";

// Cart: todo(fix)
export const addToCart = (productId, qty) => (dispatch) => {
  const data = productData.find((product) => product._id === productId);

  dispatch({
    type: "ADD_ITEM_TO_CART",
    cart: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      quantityInStock: data.quantityInStock,
      qty,
    },
  });
};

export const removeFromCart = (productId) => (dispatch) => {
  dispatch({
    type: "REMOVE_CART_ITEM",
    product: productId,
  });
};
