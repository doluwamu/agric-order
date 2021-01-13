import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchProductById } from "actions";
import ProductDetails from "components/products/ProductDetails";
import Loading from "helpers/Loading";

export class ProductDetail extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;

    this.props.dispatch(fetchProductById(id));
  }

  render() {
    const { product, isFetching } = this.props;
    console.log(product);
    if (isFetching) {
      return <Loading />;
    }

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
  // console.log(fetchedData);
  return {
    product: fetchedData,
    isFetching: datafetching,
  };
};

const ProductDetailWithRouter = withRouter(ProductDetail);
export default connect(mapStateToProps)(ProductDetailWithRouter);
