import React, { useState } from "react";
import { NumWithComma } from "../../helpers/NumberHelpers";
import { withRouter } from "react-router-dom";
import { capitalize, firstLetterCapitalize } from "helpers/Capitalize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
// import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { addToCart, changeCartQuantity } from "actions";
import { ServerError } from "errors/Server";

function ProductDetails({ product, dispatch, cartItem }) {
  const history = useHistory();
  const [qty, setQty] = useState(1);
  const [error, setError] = useState([]);

  const itemInCart = cartItem.find((item) => item.product._id === product._id);

  let quant = 0;

  if (cartItem.includes(itemInCart)) {
    quant = itemInCart.quantity;
  }

  const [cartQty, setCartQty] = useState(quant);

  const handleQtyChange = (event) => {
    if (cartQty) {
      setCartQty(event.target.value);
    }
    setQty(event.target.value);
  };

  const handleAddToCart = () => {
    return addToCart(product._id, qty)
      .then((_) => {
        history.push("/cart");
        return window.location.reload();
      })
      .catch((error) => {
        return setError(error);
      });
  };

  const handleChangeInCartQty = (id) => {
    if (qty < 1) return;
    dispatch(changeCartQuantity(id, qty));
    history.push("/cart");
    return window.location.reload();
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
                <b>Available Quantity: </b>
                <span>{product.quantityInStock}</span>
              </p>

              <p className="product-description detail">
                <b>Details:</b>{" "}
                <span>{firstLetterCapitalize(product.details)}</span>
              </p>

              <b>Qty: </b>

              <input
                style={{ width: "3rem" }}
                type="number"
                min={1}
                value={cartQty ? cartQty : qty}
                onChange={handleQtyChange}
                onKeyDown={(e) => handleQtyKeyDown(e)}
              />
            </div>

            {cartItem &&
            cartItem.length > 0 &&
            cartItem.includes(
              cartItem.find((item) => item.product._id === product._id)
            ) ? (
              cartItem.map((item) => {
                if (item.product._id === product._id) {
                  return (
                    <div key={product._id}>
                      <div>
                        <b>Product in cart</b>
                      </div>
                      <div>
                        <button
                          type="button"
                          className="btn btn-secondary add_to_cart"
                          onClick={() => handleChangeInCartQty(item._id)}
                        >
                          Change Qty
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
                    className="btn btn-secondary add_to_cart"
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
