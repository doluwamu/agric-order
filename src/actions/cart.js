// import Cookie from "js-cookie";
import axiosService from "../services/AxiosServices";

const { AgricAxios } = axiosService;
// export const addToCart = (product, productId, qty = 1) => (
//   dispatch,
//   getState
// ) => {
//   const productData = [{ ...product }];
//   const data = productData.find((prod) => prod._id === productId);

//   dispatch({
//     type: "ADD_ITEM_TO_CART",
//     item: {
//       product: data._id,
//       name: data.name,
//       image: data.image,
//       price: data.price,
//       quantityInStock: data.quantityInStock,
//       category: data.category,
//       ratings: data.ratings,
//       owner: data.owner,
//       qty,
//     },
//   });
//   const {
//     cart: { cartItems },
//   } = getState();
//   Cookie.set("cartItems", JSON.stringify(cartItems));
// };

export const getCartItems = () => (dispatch) => {
  dispatch({
    type: "GETTING_CART_ITEMS",
  });
  return AgricAxios.get("/cart/get-cart-items")
    .then(({ data }) => {
      // debugger;
      dispatch({
        type: "GET_CART_ITEMS_SUCCESS",
        data,
      });
    })
    .catch(({ message }) => {
      dispatch({
        type: "GET_CART_ITEMS_FAIL",
        message,
      });
    });
};

export const addToCart = (productId, quantity) => (dispatch) => {
  // debugger;
  const query = quantity
    ? `/cart/${productId}/add-to-cart?quantity=${parseInt(quantity)}`
    : `/cart/${productId}/add-to-cart`;
  return AgricAxios.post(query)
    .then((res) => res.data)
    .catch((error) => {
      console.log(error);
    });
};

export const removeFromCart = (id) => () => {
  return AgricAxios.delete(`/cart/remove-cart-item/${id}`)
    .then(({ data }) => data)
    .catch((error) => {
      console.log(error);
    });
};

export const clearCart = () => () => {
  return AgricAxios.delete("/cart/clear-cart")
    .then(({ data }) => data)
    .catch((error) => {
      console.log(error);
    });
};

export const changeCartQuantity = (productId, quantity) => (dispatch) => {
  return AgricAxios.patch(
    `/cart/${productId}/change-quantity-in-cart?quantity=${parseInt(quantity)}`
  )
    .then(({ data }) => data)
    .catch((error) => {
      console.log(error);
    });
};
