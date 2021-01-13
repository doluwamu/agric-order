// import { productData } from "product";

// Cart: todo(fix)
export const addToCart = (product, productId) => (dispatch) => {
  // console.log(product);
  debugger;
  const productData = [{ ...product }];
  debugger;
  const data = productData.find((prod) => prod._id === productId);
  console.log(data);
  debugger;

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
    },
  });
};

export const removeFromCart = (productId) => (dispatch) => {
  dispatch({
    type: "REMOVE_CART_ITEM",
    product: productId,
  });
};
