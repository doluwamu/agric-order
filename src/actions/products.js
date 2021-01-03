import axiosService from "../services/AxiosServices";

const { AgricAxios } = axiosService;

// Products
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
