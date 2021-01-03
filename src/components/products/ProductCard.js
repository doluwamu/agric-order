import React from "react";
import { NumWithComma } from "../../helpers/NumberHelpers";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { capitalize } from "helpers/Capitalize";

const ProductCard = ({ products }) => {
  return products.map((product) => {
    return (
      <div className="product" key={product._id}>
        <Link to={`/product/${product._id}`}>
          <img src={product.image} alt="product" />
        </Link>
        <div
          className="product_detail"
          style={{ margin: "0 auto", width: "70%", textAlign: "center" }}
        >
          <p className="product_name">Name: {capitalize(product.name)}</p>
          <p className="product-category">
            <b>Category:</b> <span>{capitalize(product.category)}</span>
          </p>
          <p className="product_price">
            Price: &#x20A6;{NumWithComma(product.price)}
          </p>
        </div>
        <div className="add-to-cart" style={{ width: "60%", margin: "0 auto" }}>
          <button
            className="btn btn-secondary"
            style={{
              padding: "5px",
              marginTop: "5px",
              boxShadow: "0 0 3px #61dafb",
              width: "100%",
            }}
          >
            Add to cart <FontAwesomeIcon icon="shopping-cart" />
          </button>
        </div>
      </div>
    );
  });
};

export default ProductCard;
