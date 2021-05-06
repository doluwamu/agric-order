import React from "react";
import { NumWithComma } from "helpers/NumberHelpers";
import { removeFromCart } from "actions";
import { capitalize } from "helpers/Capitalize";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const CartItem = ({ cartItems, dispatch }) => {
  const handleRemoveItemFromCart = (id) => {
    dispatch(removeFromCart(id));
    return window.location.reload();
  };

  return (
    <div className="cart">
      {cartItems &&
        cartItems.length > 0 &&
        cartItems.map((item) => {
          return (
            <div className="cart-item" key={item.product._id}>
              <Link to={`/product/${item.product._id}`}>
                <div className="item item-image">
                  <img src={item.product.image} alt={item.product.name} />
                </div>
              </Link>
              <div className="item item-name">
                <b>Name: </b>
                <span>{capitalize(item.product.name)}</span>
              </div>
              <div className="item item-price">
                <b>Price: </b>
                <span>&#x20A6;{NumWithComma(item.product.price)}</span>
              </div>

              <div className="item item-qty">Qty: {item.quantity}</div>

              <div className="item item-button">
                <button
                  className="btn btn-primary"
                  onClick={() => handleRemoveItemFromCart(item._id)}
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default CartItem;
