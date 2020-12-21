import axiosService from "../services/AxiosServices";
import { productData } from "data";

const { AgricAxios } = axiosService;

export const fetchProducts = () => (dispatch) => {
  dispatch({
    type: "REQUEST_DATA",
  });
  return AgricAxios.get("/products").then((res) => {
    dispatch({
      type: "REQUEST_DATA_COMPLETE",
      products: res.data,
      resource: "fetch-products",
    });
  });
};

export const fetchProductById = (productId) => (dispatch) => {
  dispatch({
    type: "REQUEST_PRODUCT",
  });

  return AgricAxios.get(`/products/${productId}`).then((res) => {
    dispatch({
      type: "REQUEST_PRODUCT_COMPLETE",
      data: res.data,
      resource: "fetch-product-by-id",
    });
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
