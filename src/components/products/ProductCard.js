import React from "react";
import { NumWithComma } from "../../helpers/NumberHelpers";
import { Link } from "react-router-dom";

const ProductCard = ({ products }) => {
  return products.map((product) => {
    return (
      <div className="product" key={product._id}>
        <Link to={`/product/${product._id}`}>
          <img src={product.image} alt="product" />
        </Link>
        <div className="product_detail">
          <p className="product_name">{product.name}</p>
          <p className="product_price">
            Price: &#x20A6;{NumWithComma(product.price)}
          </p>
        </div>
      </div>
    );
  });
};

export default ProductCard;
