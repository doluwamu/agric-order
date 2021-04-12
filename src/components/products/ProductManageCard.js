import React from "react";
import { NumWithComma } from "../../helpers/NumberHelpers";
import { Link } from "react-router-dom";
// import { addToCart } from "actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { capitalize, firstLetterCapitalize } from "helpers/Capitalize";
import { BreakWordFragment } from "helpers/WordLimits";
import { deleteProduct } from "actions";

const ProductManageCard = ({ products, dispatch }) => {
  return products.map((product) => {
    // const handleAddToCart = () => {
    //   dispatch(addToCart(product, product._id));
    // };

    const handleDelete = () => {
      const confirmDelete = window.confirm(
        "Are you sure you want to delete this product?"
      );
      if (!confirmDelete) return;
      dispatch(deleteProduct(product._id));
    };
    return (
      <div className="product" key={product._id}>
        <Link to={`/product/${product._id}`}>
          <img src={product.image} alt="product" />
        </Link>
        <div className="product-details">
          <p className="product_name">{capitalize(product.name)}</p>

          <p className="product_price">&#x20A6;{NumWithComma(product.price)}</p>

          <p className="product_detail">
            <span>
              {BreakWordFragment(firstLetterCapitalize(product.details))}
            </span>
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

        <div
          className="delete-product"
          style={{ width: "40%", margin: "10px 5px" }}
        >
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleDelete}
          >
            Delete
          </button>
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

export default ProductManageCard;
