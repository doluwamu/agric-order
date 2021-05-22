import ProductCard from "components/products/ProductCard";
import React from "react";

const ProductsDisplay = ({ products, dispatch, productLike }) => {
  return (
    <div className="all_products">
      <div className="all_products_body">
        <header className="products_header">Check out our animals</header>
        <div className="products">
          <ProductCard
            products={products}
            dispatch={dispatch}
            likedProduct={productLike}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductsDisplay;
