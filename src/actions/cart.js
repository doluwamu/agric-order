// import { productData } from "product";
import Cookie from "js-cookie";
// Cart: todo(fix)
export const addToCart = (product, productId, qty) => (dispatch, getState) => {
  const productData = [{ ...product }];
  const data = productData.find((prod) => prod._id === productId);

  dispatch({
    type: "ADD_ITEM_TO_CART",
    item: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      quantityInStock: data.quantityInStock,
      category: data.category,
      ratings: data.ratings,
      owner: data.owner,
      qty,
    },
  });
  const {
    cart: { cartItems },
  } = getState();
  Cookie.set("cartItems", JSON.stringify(cartItems));
};

export const removeFromCart = (productId) => (dispatch, getState) => {
  dispatch({
    type: "REMOVE_CART_ITEM",
    product: productId,
  });
  const {
    cart: { cartItems },
  } = getState();
  Cookie.set("cartItems", JSON.stringify(cartItems));
};
