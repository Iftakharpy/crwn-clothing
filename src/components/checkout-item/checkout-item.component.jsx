import React from "react";

import {
  removeItem,
  increaseCount,
  decreaseCount,
} from "../../redux/features/cart/cartSlice";
import { useDispatch } from "react-redux";

import "./checkout-item.styles.scss";

function CheckoutItem({ item }) {
  const dispatch = useDispatch();
  const { product, quantity } = item;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={product.imageUrl} alt={product.name} />
      </div>
      <div className="name">{product.name}</div>
      <div className="quantity">
        <div
          className="arrow"
          onClick={() =>
            quantity > 1
              ? dispatch(decreaseCount(product))
              : dispatch(removeItem(product))
          }
        >
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => dispatch(increaseCount(product))}>
          &#10095;
        </div>
      </div>
      <div className="price">${product.price * quantity}</div>
      <div
        className="remove-button"
        onClick={() => dispatch(removeItem(product))}
      >
        &#10005;
      </div>
    </div>
  );
}

export default CheckoutItem;
