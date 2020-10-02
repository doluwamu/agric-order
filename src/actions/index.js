import { productData } from "data";
export const fetchProducts = () => {
  return {
    type: "FETCH_PRODUCTS",
    products: productData,
  };
};

export const fetchProductById = (productId) => (dispatch) => {
  const product = productData.find((product) => product._id === productId);

  dispatch({
    type: "FETCH_PRODUCT_BY_ID",
    product,
  });
};

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
