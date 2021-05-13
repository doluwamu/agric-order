import React, { useState } from "react";
import { NumWithComma } from "helpers/NumberHelpers";
import { changeCartQuantity, removeFromCart } from "actions";
import { capitalize } from "helpers/Capitalize";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
// import { connect } from "react-redux";

const CartItem = ({ cartItems, dispatch }) => {
  const handleRemoveItemFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const [qty, setQty] = useState("");

  const handleChange = (id) => {
    if (qty < 1) return;
    dispatch(changeCartQuantity(id, qty));
    return window.location.reload();
  };

  return (
    <div className="cart">
      {cartItems &&
        cartItems.length > 0 &&
        cartItems.map((item) => {
          return (
            <div className="cart-item" key={item._id}>
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

              <div className="item item-qty">
                Qty:
                <input
                  style={{ width: "3rem" }}
                  type="number"
                  min="1"
                  defaultValue={item.quantity}
                  onChange={(e) => {
                    setQty(e.target.value);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "." || e.key === "e") return "";
                  }}
                />
                <button
                  type="button"
                  onClick={
                    item.quantity === qty ? null : () => handleChange(item._id)
                  }
                >
                  Change
                </button>
              </div>

              <div className="item item-button" style={{ marginTop: "20px" }}>
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
