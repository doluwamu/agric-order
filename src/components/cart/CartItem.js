import React from "react";
import { NumWithComma } from "helpers/NumberHelpers";
import { removeFromCart } from "actions";

const CartItem = ({ cartItems, dispatch }) => {
  const handleRemoveItemFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  // let i = 0;
  // const { cart } = props;
  // const { cartItems } = cart;

  return (
    <div className="cart">
      {cartItems.map((item) => {
        // localStorage.setItem(`cart_item_${i++}`, JSON.stringify(item));
        return (
          <div className="cart-item" key={item.product}>
            <div className="item item-image">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="item item-name">
              <b>Name: </b>
              <span>{item.name}</span>
            </div>
            <div className="item item-price">
              <b>Price: </b>
              <span>&#x20A6;{NumWithComma(item.price)}</span>
            </div>

            <div className="item item-qty">
              <b>Qty: </b>
              <span>{item.qty}</span>
            </div>

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
