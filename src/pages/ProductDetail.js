import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchProductById, fetchProducts } from "actions";
import ProductDetails from "components/products/ProductDetails";
import OtherProducts from "components/products/OtherProducts";


export class ProductDetail extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.dispatch(fetchProductById(id));
    this.props.dispatch(fetchProducts());
  }

  render() {
    const { product, products } = this.props;

    return product === {} ? (
      <h3>Loading...</h3>
    ) : (
      <div className="selected product-detail">
        <div className="details-page display">
          <ProductDetails product={product} />
          <OtherProducts products={products} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ product, products }) => {
  return {
    product,
    products,
  };
};

const ProductDetailWithRouter = withRouter(ProductDetail);
export default connect(mapStateToProps)(ProductDetailWithRouter);
