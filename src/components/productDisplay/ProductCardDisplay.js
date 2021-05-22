import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DisplayStars from "components/products/DisplayStars";
import { capitalize, firstLetterCapitalize } from "helpers/Capitalize";
import { NumWithComma } from "helpers/NumberHelpers";
import { BreakWordFragment } from "helpers/WordLimits";
import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const ProductCardDisplay = ({
  product,
  productInLocalStorage,
  likeProduct,
}) => {
  return (
    <div className="product" key={product._id}>
      <Link to={`/product/${product._id}`}>
        <img src={product.image} alt="product" />
      </Link>
      <div className="product-details">
        <p className="product_name">{capitalize(product.name)}</p>

        <p className="product_price">&#x20A6;{NumWithComma(product.price)}</p>

        <DisplayStars likes={product.likes} />

        <p className="product_detail">
          <span>
            {BreakWordFragment(firstLetterCapitalize(product.details))}
          </span>
        </p>

        <p style={{ marginTop: "0.5rem" }}>
          <Link
            style={{
              color: "blue",
              textDecoration: "none",
            }}
            to={`/product/${product._id}`}
          >
            See more details <FontAwesomeIcon icon="arrow-right" />
          </Link>
        </p>

        {!productInLocalStorage ? (
          <p>
            <FontAwesomeIcon
              onClick={() => likeProduct(product._id)}
              icon={["fas", "heart"]}
              style={{ margin: "5px 5px 0" }}
            />
          </p>
        ) : (
          <p>
            <FontAwesomeIcon
              onClick={() => likeProduct(product._id)}
              icon={["fas", "heartbeat"]}
              style={{ margin: "5px 5px 0" }}
            />
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductCardDisplay;
