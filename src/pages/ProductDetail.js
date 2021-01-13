import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchProductById } from "actions";
import ProductDetails from "components/products/ProductDetails";
import Loading from "helpers/Loading";
import ConnectionError from "errors/ConnectionError";

export class ProductDetail extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;

    this.props.dispatch(fetchProductById(id));
  }

  render() {
    const { product, isFetching, dataFetchingFail } = this.props;
    console.log(product);
    if (isFetching) {
      return <Loading />;
    }

    if (dataFetchingFail && dataFetchingFail.length > 0) {
      return <ConnectionError />;
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

const mapStateToProps = ({
  product: { fetchedData, datafetching, dataFetchingFail },
}) => {
  // console.log(fetchedData);
  return {
    product: fetchedData,
    isFetching: datafetching,
    dataFetchingFail,
  };
};

const ProductDetailWithRouter = withRouter(ProductDetail);
export default connect(mapStateToProps)(ProductDetailWithRouter);
