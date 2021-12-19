import React from "react";

import { ReactComponent as ShoppingIcon } from "../../assets/11.1 shopping-bag.svg";

import "./cart-icon.styles.scss";

const ShoppingCart = () => {
  return (
    <div className="cart-icon">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default ShoppingCart;
