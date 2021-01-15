import React, { useState } from "react";
import { NumWithComma } from "../../helpers/NumberHelpers";
import { withRouter } from "react-router-dom";
import { capitalize, firstLetterCapitalize } from "helpers/Capitalize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import { addToCart } from "actions";
// import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function ProductDetails({ product, dispatch }) {
  const history = useHistory();
  const [qty, setQty] = useState(1);

  const handleQtyChange = (event) => {
    setQty(event.target.value);
  };

  const handleAddToCart = () => {
    dispatch(addToCart(product, product._id, qty));
    return history.push("/cart");
  };

  return (
    <div className="container">
      <header className="products_header" style={{ marginBottom: "1rem" }}>
        {capitalize(product.name)}
      </header>
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
            <p className="product-name detail">
              <b>Name:</b> <span>{capitalize(product.name)}</span>
            </p>
            <p className="product-category detail">
              <b>Category:</b> <span>{capitalize(product.category)}</span>
            </p>
            {product.owner && (
              <div className="product-owner detail">
                <b>Owner: </b>
                <span>{capitalize(product.owner.username) || ""}</span>
                <div>{product.owner.email || ""}</div>
              </div>
            )}
            <p className="product-price detail">
              <b>Price:</b> <span>&#x20A6;{NumWithComma(product.price)}</span>
            </p>
            <b className="status detail">
              Status:{" "}
              {product.quantityInStock > 0 ? (
                <span className="status_available">In stock</span>
              ) : (
                <span className="status_unavailable">Out of stock</span>
              )}
            </b>
            <p className="product-description detail">
              <b>Details:</b>{" "}
              <span>{firstLetterCapitalize(product.details)}</span>
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
                Add to cart <FontAwesomeIcon icon="shopping-cart" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const ProductDetailsWithRouter = withRouter(ProductDetails);

export default connect()(ProductDetailsWithRouter);
