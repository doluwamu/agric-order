import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchProductById, fetchProducts } from "actions";
import ProductDetails from "components/products/ProductDetails";

export class ProductDetail extends Component {
  componentDidMount() {
    // const { id } = this.props.match.params;
    const { product } = this.props;
    if (product.length > 0) {
      debugger;
      this.props.dispatch(fetchProductById(product._id));
    }
    // this.props.dispatch(fetchProducts());
  }

  render() {
    const { product } = this.props;

    return product === {} ? (
      <h3>Loading...</h3>
    ) : (
      <div className="selected product-detail">
        <div className="details-page display">
          <ProductDetails product={product} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ product: { dataFetched, fetchingData } }) => {
  return {
    product: dataFetched,
    isFetching: fetchingData,
  };
};

const ProductDetailWithRouter = withRouter(ProductDetail);
export default connect(mapStateToProps)(ProductDetailWithRouter);
