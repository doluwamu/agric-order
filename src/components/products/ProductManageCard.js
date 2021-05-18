import React from "react";
import { NumWithComma } from "../../helpers/NumberHelpers";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { capitalize, firstLetterCapitalize } from "helpers/Capitalize";
import { BreakWordFragment } from "helpers/WordLimits";
import { deleteProduct } from "actions";
import DisplayStars from "./DisplayStars";

const ProductManageCard = ({ products, dispatch }) => {
  return products.map((product) => {
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

          <DisplayStars likes={product.likes} />

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
          style={{ width: "100%", margin: "10px 5px" }}
        >
          <button
            style={{ margin: "5px" }}
            type="button"
            className="btn btn-primary"
            onClick={handleDelete}
          >
            Delete
          </button>

          <button
            style={{ margin: "5px" }}
            type="button"
            className="btn btn-secondary"
          >
            Edit
          </button>
        </div>
      </div>
    );
  });
};

export default ProductManageCard;
