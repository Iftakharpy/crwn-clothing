import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { toggleItemsVisibility } from "../../redux/features/cart/cartSlice";

import { ReactComponent as ShoppingIcon } from "../../assets/11.1 shopping-bag.svg";

import "./cart-icon.styles.scss";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const itemsCount = useSelector((state) => {
    let count = 0;
    state.cart.items.forEach((element) => (count += element.quantity));
    return count;
  });
  return (
    <div
      className="cart-icon"
      onClick={() => dispatch(toggleItemsVisibility())}
    >
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemsCount}</span>
    </div>
  );
};

export default ShoppingCart;
