import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchProductById, fetchProducts } from "actions";
import ProductDetails from "components/products/ProductDetails";
import Loading from "helpers/Loading";
import ConnectionError from "errors/ConnectionError";
import { capitalize } from "helpers/Capitalize";

export class RelatedProductPage extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;

    window.scrollTo(500, 0);
    this.props.dispatch(fetchProductById(id));
    this.props.dispatch(fetchProducts());
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
        <>
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
        </>
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

const RelatedProductWithRouter = withRouter(RelatedProductPage);
export default connect(mapStateToProps)(RelatedProductWithRouter);
