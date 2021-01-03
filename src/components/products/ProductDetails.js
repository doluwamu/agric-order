import React, { useState } from "react";
import { NumWithComma } from "../../helpers/NumberHelpers";
import { withRouter } from "react-router-dom";
import { capitalize } from "helpers/Capitalize";

function ProductDetails(props) {
  const { product } = props;
  const [qty, setQty] = useState(1);

  const handleQtyChange = (event) => {
    setQty(event.target.value);
  };

  const handleAddToCart = () => {
    props.history.push(`/cart/${props.match.params.id}?qty=${qty}`);
  };

  return (
    <div className="container">
      <div className="elements">
        <div className="image-detail">
          <img
            className="product-image"
            src={product.image}
            alt={product.name}
          />
        </div>
        <div className="product-details">
          <div className="main-details">
            <p className="product-name">
              <b>Name:</b> <span>{capitalize(product.name)}</span>
            </p>
            <p className="product-category">
              <b>Category:</b> <span>{capitalize(product.category)}</span>
            </p>
            <p className="product-category">
              <b>Owner:</b> <span>{capitalize(product.owner.username)}</span>
            </p>
            <p className="product-price">
              <b>Price:</b> <span>&#x20A6;{NumWithComma(product.price)}</span>
            </p>
            <b className="status">
              Status:{" "}
              {product.quantityInStock > 0 ? (
                <span className="status_available">In stock</span>
              ) : (
                <span className="status_unavailable">Out of stock</span>
              )}
            </b>
            <p className="product-description">
              <b>Details:</b> <span>{product.details}</span>
            </p>

            <b>Qty</b>
            <select value={qty} onChange={handleQtyChange}>
              {[...Array(product.quantityInStock).keys()].map((x) => {
                return (
                  <option key={x + 1} value={x + 1}>
                    {x + 1}
                  </option>
                );
              })}
            </select>
          </div>

          {product.quantityInStock > 0 && (
            <div className="buttons">
              <button
                onClick={handleAddToCart}
                className="btn btn-secondary add_to_cart"
              >
                Add to cart
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default withRouter(ProductDetails);
