import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { toggleItemsVisibility } from "../../redux/features/cart/cartSlice";

import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { ReactComponent as ShoppingIcon } from "../../assets/11.1 shopping-bag.svg";

import "./cart-icon.styles.scss";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const hidden = useSelector((state) => state.cart.hidden);
  console.log(hidden);
  const itemsCount = useSelector((state) => {
    let count = 0;
    state.cart.items.forEach((element) => (count += element.quantity));
    return count;
  });

  return (
    <div className="cart">
      <div
        className="cart-icon"
        onClick={() => dispatch(toggleItemsVisibility())}
      >
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{itemsCount}</span>
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

export default ShoppingCart;
