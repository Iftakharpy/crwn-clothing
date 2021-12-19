import React from "react";

import "./cart-item.styles.scss";

const CartItem = ({ item }) => {
  const { product, quantity } = item;
  return (
    <div className="cart-item">
      <img className="image" src={product.imageUrl} alt={product.name} />
      <div className="item-details">
        <span className="name">{product.name}</span>
        <span className="price">
          {quantity} x ${product.price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
