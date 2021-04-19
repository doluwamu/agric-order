import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
// <<<<<<< HEAD
// import { addToCart, getCartItems } from "actions";
// =======
import { addToCart, clearCart } from "actions";
// >>>>>>> master
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
    // debugger;

    const handleClearCart = () => {
      const permission = window.confirm("Do you want to clear your cart?");
      if (!permission) return;
      this.props.dispatch(clearCart());
      window.location.reload();
    };

    return (
      <>
        <header
          className="products_header"
          style={{
            position: "absolute",
            top: "12rem",
            left: "40%",
            maxWidth: "20rem",
            marginBottom: "2.5rem",
          }}
        >
          Your cart
        </header>
        <div className="cart-items">
          <CartItem cartItems={cartItems} dispatch={this.props.dispatch} />
          <CalcCartItems cartItems={cartItems} />
        </div>
        {cartItems && cartItems.length > 0 ? (
          <div style={{ width: "30%", margin: "0 auto" }}>
            <button
              className="btn btn-primary"
              type="button"
              onClick={handleClearCart}
            >
              Clear cart
            </button>
          </div>
        ) : (
          <h3 style={{ textAlign: "center" }}>Your cart is empty</h3>
        )}
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
