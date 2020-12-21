import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchProductById, fetchProducts } from "actions";
import ProductDetails from "components/products/ProductDetails";

export class ProductDetail extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;

    this.props.dispatch(fetchProductById(id));
  }

  render() {
    const { product, isFetching } = this.props;
    if (isFetching) {
      return (
        <h2 style={{ fontSize: "25px", marginTop: "10%", marginLeft: "30%" }}>
          Loading...
        </h2>
      );
    }
    console.log(product);

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

const mapStateToProps = ({ product: { fetchedData, datafetching } }) => {
  return {
    product: fetchedData,
    isFetching: datafetching,
  };
};

const ProductDetailWithRouter = withRouter(ProductDetail);
export default connect(mapStateToProps)(ProductDetailWithRouter);
