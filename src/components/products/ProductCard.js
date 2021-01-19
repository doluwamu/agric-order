import React from "react";
import { NumWithComma } from "../../helpers/NumberHelpers";
import { Link } from "react-router-dom";
// import { addToCart } from "actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { capitalize, firstLetterCapitalize } from "helpers/Capitalize";
import { BreakWordFragment } from "helpers/WordLimits";

const ProductCard = ({ products, dispatch }) => {
  return products.map((product) => {
    // const handleAddToCart = () => {
    //   dispatch(addToCart(product, product._id));
    // };
    return (
      <div className="product" key={product._id}>
        <Link to={`/product/${product._id}`}>
          <img src={product.image} alt="product" />
        </Link>
        <div className="product-details">
          <p className="product_name">Name: {capitalize(product.name)}</p>
          <p className="product_category">
            <b>Category:</b> <span>{capitalize(product.category)}</span>
          </p>
          <p className="product_detail">
            <b>Detail:</b>{" "}
            <span>
              {BreakWordFragment(firstLetterCapitalize(product.details))}
            </span>
          </p>
          <p className="product_price">
            Price: &#x20A6;{NumWithComma(product.price)}
          </p>
          <p style={{ marginTop: "0.5rem" }}>
            <Link
              style={{
                color: "blue",
                textDecoration: "none",
              }}
              to={`/product/${product._id}`}
            >
              See more details <FontAwesomeIcon icon="arrow-right" />
            </Link>
          </p>
        </div>
        {/* <div className="add-to-cart" style={{ width: "90%", margin: "0 auto" }}>
          <button
            className="btn btn-secondary"
            style={{
              padding: "5px",
              marginTop: "5px",
              boxShadow: "0 0 3px #61dafb",
              width: "100%",
            }}
            onClick={handleAddToCart}
          >
            Add to cart <FontAwesomeIcon icon="shopping-cart" />
          </button>
        </div> */}
      </div>
    );
  });
};

export default ProductCard;
