import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchProductById } from "actions";
import ProductDetails from "components/products/ProductDetails";
import Loading from "helpers/Loading";
import ConnectionError from "errors/ConnectionError";
import { capitalize } from "helpers/Capitalize";

export class ProductDetail extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;

    this.props.dispatch(fetchProductById(id));
  }

  render() {
    const { product, isFetching, dataFetchingFail, cartItem } = this.props;

    if (isFetching) {
      return <Loading />;
    }

    if (dataFetchingFail && dataFetchingFail.length > 0) {
      return <ConnectionError />;
    }

    return (
      product && (
        <div className="selected product-detail">
          <header
            className="products_header"
            style={{
              textAlign: "center",
              marginTop: "2rem",
            }}
          >
            {capitalize(product.name)}
          </header>
          <div className="details-page display">
            <ProductDetails product={product} cartItem={cartItem} />
          </div>
        </div>
      )
    );
  }
}

const mapStateToProps = ({
  cart: { getCartItemsSuccess },
  products: { selectedProduct },
}) => {
  return {
    product: selectedProduct.items,
    isFetching: selectedProduct.isFetching,
    dataFetchingFail: selectedProduct.errors,
    cartItem: getCartItemsSuccess,
  };
};

const ProductDetailWithRouter = withRouter(ProductDetail);
export default connect(mapStateToProps)(ProductDetailWithRouter);
