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

  const isCartItem = cartItem && cartItem.length > 0;

  // const quant =
  //   isCartItem &&
  //   cartItem.map((item) => {
  //     return item.product._id === product._id && item.quantity;
  //   });

  // const [cartQty, setCartQty] = useState(quant);

  const handleQtyChange = (event) => {
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
              <b>Details:</b>{" "}
              <span>{firstLetterCapitalize(product.details)}</span>
            </p>

            <b>Qty: </b>

            <input
              style={{ width: "3rem" }}
              type="number"
              value={qty}
              onChange={handleQtyChange}
              onKeyDown={(e) => handleQtyKeyDown(e)}
            />
          </div>

          {isCartItem ? (
            cartItem.map((item) => {
              return (
                item.product._id === product._id && (
                  <button
                    key={item.product._id}
                    type="button"
                    className="btn btn-secondary add_to_cart"
                    onClick={() => handleChangeInCartQty(item._id)}
                  >
                    Change Qty
                  </button>
                )
              );
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
  );
}

const ProductDetailsWithRouter = withRouter(ProductDetails);

export default connect()(ProductDetailsWithRouter);
