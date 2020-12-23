import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchProductById } from "actions";
import ProductDetails from "components/products/ProductDetails";
import Spinner from "components/shared/Spinner";

export class ProductDetail extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;

    this.props.dispatch(fetchProductById(id));
  }

  render() {
    const { product, isFetching } = this.props;
    if (isFetching) {
      return (
        <p style={{ marginTop: "10%", marginLeft: "30%" }}>
          <Spinner />
          <h2 style={{ marginTop: "5px" }}>Loading...</h2>
        </p>
      );
    }
    console.log(product);

    return (
      product && (
        <div className="selected product-detail">
          <div className="details-page display">
            <ProductDetails product={product} />
          </div>
        </div>
      )
    );
  }
}

const mapStateToProps = ({ product: { fetchedData, datafetching } }) => {
  return {
    product: fetchedData,
    isFetching: datafetching,
  };
};

const ProductDetailWithRouter = withRouter(ProductDetail);
export default connect(mapStateToProps)(ProductDetailWithRouter);
