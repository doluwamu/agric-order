import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addToCart } from "actions";
import CartItem from "components/cart/CartItem";
import CalcCartItems from "components/cart/CalcCartItems";

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

  render() {
    const { cart } = this.props;
    const { cartItems } = cart;
    return (
      <>
        <header
          className="products_header"
          style={{
            position: "absolute",
            top: "12rem",
            left: "4rem",
            maxWidth: "20rem",
            marginBottom: "1.5rem",
          }}
        >
          Your cart
        </header>
        <div className="cart-items">
          <CartItem cartItems={cartItems} dispatch={this.props.dispatch} />
          <CalcCartItems cartItems={cartItems} />
        </div>
      </>
    );
  }
}
const mapStateToProps = ({ cart }) => {
  return {
    cart,
  };
};

const cartItemWithRouter = withRouter(CartPage);
export default connect(mapStateToProps)(cartItemWithRouter);
