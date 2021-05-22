import React from "react";
import { addLike } from "actions";
import ProductCardDisplay from "components/productDisplay/ProductCardDisplay";

const ProductCard = ({ products, dispatch }) => {
  return products.map((product) => {
    const productInLocalStorage = localStorage.getItem(`${product.name}-liked`);

    const likeProduct = (productId) => {
      if (productInLocalStorage) {
        dispatch({
          type: "REMOVE_LIKE",
          data: product,
        });
        return localStorage.removeItem(`${product.name}-liked`);
      }
      dispatch(addLike(productId));
      return localStorage.setItem(`${product.name}-liked`, product._id);
    };

    return (
      <ProductCardDisplay
        product={product}
        productInLocalStorage={productInLocalStorage}
        likeProduct={likeProduct}
      />
    );
  });
};

export default ProductCard;
