import axiosService from "../services/AxiosServices";
import { productData } from "data";
import Axios from "axios";

const { AgricAxios } = axiosService;

export const fetchProducts = () => (dispatch) => {
  dispatch({
    type: "REQUEST_DATA",
  });
  return Axios.get("/api/v1/products").then((res) => {
    dispatch({
      type: "REQUEST_DATA_COMPLETE",
      products: res.data,
    });
  });
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
