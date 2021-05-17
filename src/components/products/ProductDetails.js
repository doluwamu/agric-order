import React, { useState } from "react";
import { NumWithComma } from "../../helpers/NumberHelpers";
import { withRouter } from "react-router-dom";
import { capitalize, firstLetterCapitalize } from "helpers/Capitalize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
// import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { addToCart, changeCartQuantity } from "actions";
import { ServerError } from "errors/Server";
import AlertErrors from "errors/AlertErrors";
import DisplayStars from "./DisplayStars";

function ProductDetails({ product, dispatch, cartItem }) {
  const history = useHistory();
  const [qty, setQty] = useState(1);
  const [error, setError] = useState([]);
  const [openQtyError, setOpenQtyError] = useState(false);

  const itemInCart = cartItem.find((item) => item.product._id === product._id);

  const handleQtyChange = (event) => {
    setQty(event.target.value);
  };

  const handleAddToCart = () => {
    if (qty > product.quantityInStock) {
      setOpenQtyError(true);
      return;
    }
    addToCart(product._id, qty)
      .then((_) => {
        history.push("/cart");
        return window.location.reload();
      })
      .catch((error) => {
        return setError(error);
      });
    return (document.getElementById("add-to-cart-btn").disabled = true);
  };

  const handleChangeInCartQty = (id) => {
    if (qty < 1) return;
    if (qty > product.quantityInStock) {
      setOpenQtyError(true);
      return;
    }
    changeCartQuantity(id, qty)
      .then((_) => {
        history.push("/cart");
        return window.location.reload();
      })
      .catch((error) => setError(error));
  };

  const handleQtyKeyDown = (e) => {
    if (e.key === "." || e.key === "e") return;
  };

  return (
    <>
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
              <p className="product-name detail">
                <b>Name:</b> <span>{capitalize(product.name)}</span>
              </p>
              <p className="product-category detail">
                <b>Category:</b> <span>{capitalize(product.category)}</span>
              </p>
              {product.owner && (
                <div className="product-owner detail">
                  <b>Seller: </b>
                  <span>{capitalize(product.owner.username) || ""}</span>
                  <div>{product.owner.email || ""}</div>
                </div>
              )}
              <div className="product-price detail">
                <b>Price:</b> <span>&#x20A6;{NumWithComma(product.price)}</span>
              </div>
              <div className="status detail">
                <b>
                  Status:{" "}
                  {product.quantityInStock > 0 ? (
                    <span className="status_available">In stock</span>
                  ) : (
                    <span className="status_unavailable">Out of stock</span>
                  )}
                </b>
              </div>

              <div className="product-description detail">
                <b>Available Quantity: </b>
                <span>{product.quantityInStock}</span>
              </div>

              <div className="product-description detail">
                <DisplayStars likes={product.likes} />
              </div>

              <div className="product-description detail">
                <b>Details:</b>{" "}
                <span>{firstLetterCapitalize(product.details)}</span>
              </div>

              <div>
                <b>Qty: </b>

                <input
                  style={{ width: "3rem" }}
                  type="number"
                  min={1}
                  value={qty}
                  onChange={handleQtyChange}
                  onKeyDown={(e) => handleQtyKeyDown(e)}
                />
                {openQtyError && (
                  <AlertErrors
                    error={`There ${
                      product.quantityInStock > 1 ? "are" : "is"
                    } only ${product.quantityInStock} available`}
                    setOpenError={setOpenQtyError}
                    marginLeft={"50%"}
                  />
                )}
              </div>
            </div>

            {cartItem &&
            cartItem.length > 0 &&
            cartItem.includes(itemInCart) ? (
              cartItem.map((item) => {
                if (item.product._id === product._id) {
                  return (
                    <div key={product._id}>
                      <div>
                        <b>
                          Product in{" "}
                          <Link to="/cart" style={{ textDecoration: "none" }}>
                            cart
                          </Link>{" "}
                        </b>
                      </div>
                      <div className="buttons">
                        <button
                          type="button"
                          className="btn btn-secondary add_to_cart"
                          onClick={() => handleChangeInCartQty(item._id)}
                        >
                          Add to cart <FontAwesomeIcon icon="shopping-cart" />
                        </button>
                      </div>
                    </div>
                  );
                } else return null;
              })
            ) : (
              <>
                <div className="buttons">
                  <button
                    onClick={handleAddToCart}
                    onDoubleClick={handleAddToCart}
                    className="btn btn-secondary add_to_cart"
                    id="add-to-cart-btn"
                  >
                    Add to cart <FontAwesomeIcon icon="shopping-cart" />
                  </button>
                </div>

                {error && <ServerError error={error} />}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

const ProductDetailsWithRouter = withRouter(ProductDetails);

export default connect()(ProductDetailsWithRouter);
