import React from "react";
import { NumWithComma } from "helpers/NumberHelpers";
import { removeFromCart } from "actions";
import { capitalize } from "helpers/Capitalize";

const CartItem = ({ cartItems, dispatch }) => {
  const handleRemoveItemFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  // const handleChange = (e) => {
  //   setQty(e.target.value);
  // };

  // let i = 0;
  // const { cart } = props;
  // const { cartItems } = cart;

  // const [qty, setQty] = useState(null);
  return (
    <div className="cart">
      {cartItems.map((item) => {
        return (
          <div className="cart-item" key={item.product}>
            <div className="item item-image">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="item item-name">
              <b>Name: </b>
              <span>{capitalize(item.name)}</span>
            </div>
            <div className="item item-price">
              <b>Price: </b>
              <span>&#x20A6;{NumWithComma(item.price)}</span>
            </div>

            <div className="item item-qty">Quantity: {item.qty}</div>

            {/* Qty:
            <select
              value={item.qty}
              onChange={(e) => {
                dispatch(addToCart(item.product, item._id, e.target.value));
              }}
            >
              {[...Array(item.quantityInStock).keys()].map((x) => (
                <option key={x + 1} value={x + 1}>
                  {x + 1}
                </option>
              ))}
            </select> */}
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
