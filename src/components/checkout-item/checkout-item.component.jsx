import React from "react";

import "./checkout-item.styles.scss";

function CheckoutItem({ item }) {
  const { product, quantity } = item;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={product.imageUrl} alt={product.name} />
      </div>
      <div className="name">{product.name}</div>
      <div className="quantity">{quantity}</div>
      <div className="price">{product.price}</div>
      <div className="remove-button">&#10005;</div>
    </div>
  );
}

export default CheckoutItem;
