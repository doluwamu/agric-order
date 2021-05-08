import React from "react";
import { NumWithComma } from "helpers/NumberHelpers";

const CalcCartItems = ({ cartItems }) => {
  return (
    <div
      className={cartItems && cartItems.length > 0 ? "cart-calc" : ""}
      style={{ marginBottom: "3rem" }}
    >
      {cartItems && cartItems.length > 0 && (
        <div className="calc">
          <h3 className="cart-totals">
            <p>
              {cartItems.length}{" "}
              {cartItems.length === 1 ? "Product" : "Products"} added to cart
            </p>
            <p>
              Quantity:{" "}
              {cartItems.reduce(
                (a, c) => parseInt(a) + parseInt(c.quantity),
                0
              ) || 0}
            </p>
            <p>
              Total cost: &#x20A6;
              {NumWithComma(
                cartItems.reduce((a, c) => a + c.quantity * c.product.price, 0)
              )}
            </p>
          </h3>
          <button className="btn btn-success">Check out</button>
        </div>
      )}
    </div>
  );
};

export default CalcCartItems;
