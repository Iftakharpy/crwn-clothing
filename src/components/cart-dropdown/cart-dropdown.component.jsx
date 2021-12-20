import React from "react";
import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { toggleItemsVisibility } from "../../redux/features/cart/cartSlice";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

import "./cart-dropdown.styles.scss";

import { BASE } from "../../App";

const CartDropdown = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let cartItems = useSelector((state) => state.cart.items);
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length > 0 ? (
          cartItems.map((item) => <CartItem key={nanoid(10)} item={item} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          dispatch(toggleItemsVisibility());
          navigate(`/${BASE}/checkout`);
        }}
      >
        Go To Checkout
      </CustomButton>
    </div>
  );
};

export default CartDropdown;
