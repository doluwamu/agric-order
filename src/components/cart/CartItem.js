import React from "react";
import { NumWithComma } from "helpers/NumberHelpers";
import { removeFromCart } from "actions";
import { capitalize } from "helpers/Capitalize";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const CartItem = ({ cartItems, dispatch }) => {
  const handleRemoveItemFromCart = (id) => {
    const permission = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (!permission) {
      return;
    }
    dispatch(removeFromCart(id));
  };

  return (
    <div className="cart">
      {cartItems.map((item) => {
        return (
          <div className="cart-item" key={item.product}>
            <Link to={`/product/${item.product}`}>
              <div className="item item-image">
                <img src={item.image} alt={item.name} />
              </div>
            </Link>
            <div className="item item-name">
              <b>Name: </b>
              <span>{capitalize(item.name)}</span>
            </div>
            <div className="item item-price">
              <b>Price: </b>
              <span>&#x20A6;{NumWithComma(item.price)}</span>
            </div>

            <div className="item item-qty">Qty: {item.qty}</div>

            <div className="item item-button">
              <button
                className="btn btn-primary"
                onClick={() => handleRemoveItemFromCart(item.product)}
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
