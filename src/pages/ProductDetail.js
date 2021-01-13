import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchProductById } from "actions";
import ProductDetails from "components/products/ProductDetails";
import Loading from "helpers/Loading";
import { capitalize } from "helpers/Capitalize";

export class ProductDetail extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;

    this.props.dispatch(fetchProductById(id));
  }

  render() {
    const { product, isFetching } = this.props;
    if (isFetching) {
      return <Loading />;
    }

    return (
      product && (
        <div className="selected product-detail">
          <header className="products_header">
            {capitalize(product.name)}
          </header>
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
