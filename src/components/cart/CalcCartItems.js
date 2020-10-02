import React from "react";
import { NumWithComma } from "helpers/NumberHelpers";

const CalcCartItems = ({ props }) => {
  const { cart } = props;
  const { cartItems } = cart;
  return (
    <div className="cart-calc">
      <div className="calc">
        <h3 className="cart-totals">
          <p>
            {cartItems.reduce((a, c) => a + c.qty, 0)} Item(s) added to Cart
          </p>
          <p>
            Cost: &#x20A6;
            {NumWithComma(cartItems.reduce((a, c) => a + c.price * c.qty, 0))}
          </p>
        </h3>
        <button className="btn btn-success">Place Order</button>
      </div>
    </div>
  );
};

export default CalcCartItems;
