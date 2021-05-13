// import Cookie from "js-cookie";
import { extractServerError } from "actions";
import axiosService from "../services/AxiosServices";

const { AgricAxios } = axiosService;

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

export const addToCart = (productId, quantity) => {
  // debugger;
  const query = quantity
    ? `/cart/${productId}/add-to-cart?quantity=${parseInt(quantity)}`
    : `/cart/${productId}/add-to-cart`;
  return AgricAxios.post(query)
    .then(({ data }) => data)
    .catch((error) => Promise.reject(extractServerError(error.response) || []));
};

export const removeFromCart = (id) => (dispatch) => {
  return AgricAxios.delete(`/cart/remove-cart-item/${id}`)
    .then(({ data }) => {
      dispatch({
        type: "REMOVE_CART_ITEM",
        product: data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const clearCart = () => (dispatch) => {
  return AgricAxios.delete("/cart/clear-cart")
    .then(({ data }) => {
      dispatch({
        type: "CLEAR_CART",
        products: data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const changeCartQuantity = (productId, quantity) => (dispatch) => {
  // debugger;
  return AgricAxios.patch(
    `/cart/${productId}/change-quantity-in-cart?quantity=${parseInt(quantity)}`
  )
    .then(({ data }) => {
      dispatch({
        type: "CHANGE_CART_QUANTITY",
        data,
      });
    })
    .catch((error) => {
      // debugger;
      console.log(error);
    });
};
