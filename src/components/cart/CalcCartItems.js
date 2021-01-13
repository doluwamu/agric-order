import React from "react";
import { NumWithComma } from "helpers/NumberHelpers";

const CalcCartItems = ({ cartItems }) => {
  // const { cart } = props;
  // const { cartItems } = cart;
  return (
    <div className="cart-calc">
      <div className="calc">
        <h3 className="cart-totals">
          <p>{cartItems.length} Product(s) added to Cart</p>
          <p>
            Quantity:{" "}
            {NumWithComma(
              cartItems.reduce((a, c) => parseInt(a) + parseInt(c.qty), 0)
            )}
          </p>
          <p>
            Cost: &#x20A6;
            {/* {NumWithComma(cartItems.reduce((a, c) => a + c.price, 0))} */}
            {NumWithComma(cartItems.reduce((a, c) => a + c.qty * c.price, 0))}
          </p>
        </h3>
        <button className="btn btn-success">Place Order</button>
      </div>
    </div>
  );
};

export default CalcCartItems;
