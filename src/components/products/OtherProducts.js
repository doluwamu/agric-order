import React from "react";
import { NumWithComma } from "../../helpers/NumberHelpers";
// import { Link } from "react-router-dom";

function OtherProducts({ products }) {
  return (
    <div className="other-products-display">
      <h2 className="other product-heading">Check out our animals</h2>
      <div className="other_products">
        {products.map((product) => {
          return (
            <div className="other-products" key={product._id}>
              <div className="other-products-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="other-products-details">
                <p className="other-products-details-name">
                  Name: {product.name}
                </p>
                <p className="other-products-details-price">
                  Price: &#x20A6;{NumWithComma(product.price)}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OtherProducts;
