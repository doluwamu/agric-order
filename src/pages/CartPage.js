import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addToCart, removeFromCart } from "actions";
import { NumWithComma } from "../helpers/NumberHelpers";

class CartPage extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    const qty = this.props.location.search
      ? Number(this.props.location.search.split("=")[1])
      : 1;

    if (id) {
      this.props.dispatch(addToCart(id, qty));
    }
  }

  handleRemoveFromCart(id) {
    this.props.dispatch(removeFromCart(id));
  }

  render() {
    const { cart } = this.props;
    const { cartItems } = cart;
    return (
      <div className="cart-items">
        <div className="cart">
          {cartItems.map((item) => {
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

                {/* <div className="item item-qty">
                  <span>
                    <b>Qty:</b>
                  </span>
                  <select
                    value={item.qty}
                    onChange={(e) =>
                      this.props.dispatch(
                        addToCart(item.product, e.target.value)
                      )
                    }
                  >
                    {[...Array(item.quantityInStock).keys()].map((x) => {
                      return (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      );
                    })}
                  </select>
                </div> */}

                <div className="item item-button">
                  <button
                    className="btn btn-primary"
                    onClick={() => this.handleRemoveFromCart(item.product)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="cart-calc">
          <div className="calc">
            <h3 className="cart-totals">
              <p>
                {cartItems.reduce((a, c) => a + c.qty, 0)} Item(s) added to Cart
              </p>
              <p>
                Cost: &#x20A6;
                {NumWithComma(
                  cartItems.reduce((a, c) => a + c.price * c.qty, 0)
                )}
              </p>
            </h3>
            <button className="btn btn-success">Place Order</button>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  // console.log(state);
  return {
    cart: state.cart,
  };
};

const cartItemWithRouter = withRouter(CartPage);
export default connect(mapStateToProps)(cartItemWithRouter);
