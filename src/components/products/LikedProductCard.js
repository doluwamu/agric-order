import React from "react";
import { NumWithComma } from "../../helpers/NumberHelpers";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { capitalize, firstLetterCapitalize } from "helpers/Capitalize";
import { BreakWordFragment } from "helpers/WordLimits";
import { addLike } from "actions";
import DisplayStars from "./DisplayStars";

const LikedProductCard = ({ products, dispatch }) => {
  return products.map((product) => {
    const productInLocalStorage = localStorage.getItem(`${product.name}-liked`);

    const likeProduct = (productId) => {
      if (productInLocalStorage) {
        dispatch({
          type: "REMOVE_LIKE",
          data: product,
        });
        return localStorage.removeItem(`${product.name}-liked`);
      }
      dispatch(addLike(productId));
      return localStorage.setItem(`${product.name}-liked`, product._id);
    };

    if (productInLocalStorage) {
      return (
        <div className="product" key={product._id}>
          <Link to={`/product/${product._id}`}>
            <img src={product.image} alt="product" />
          </Link>
          <div className="product-details">
            <p className="product_name">{capitalize(product.name)}</p>

            <p className="product_price">
              &#x20A6;{NumWithComma(product.price)}
            </p>

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
                  icon="heart"
                  style={{ margin: "5px 5px 0" }}
                />
              </p>
            ) : (
              <p>
                <FontAwesomeIcon
                  onClick={() => likeProduct(product._id)}
                  icon="heartbeat"
                  style={{ margin: "5px 5px 0" }}
                />
              </p>
            )}
          </div>
        </div>
      );
    }

    return null;
  });
};

export default LikedProductCard;
