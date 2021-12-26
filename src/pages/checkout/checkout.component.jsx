import React, { useEffect } from "react";

import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeButton from "../../components/stripe-button/stripe-button.component";

import "./checkout.styles.scss";

const Checkout = (props) => {
  const { defaultPageTitle } = useSelector((state) => state.defaults);
  useEffect(() => {
    // When component mounts change page title
    if (props?.pageTitle) document.title = props?.pageTitle;
    return () => {
      // When component unmounts change page title to default title
      if (defaultPageTitle) document.title = defaultPageTitle;
    };
  });
  const { items } = useSelector((state) => state.cart);
  const total = items.reduce(
    (previousTotal, item) => previousTotal + item.product.price * item.quantity,
    0
  );

  return (
    <main className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      <div className="checkout-items">
        {items.map((item) => (
          <CheckoutItem key={nanoid(5)} item={item} />
        ))}
      </div>
      <div className="total">
        <span>Total: ${total}</span>
      </div>
      <StripeButton price={total} />
    </main>
  );
};

export default Checkout;
