import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const stripePrice = price * 100;
  const publishableKey =
    "pk_test_51KAl2yGsLRe4YhcnktK3T64qMLQHm6FZ9oBAggucMrpFmiMuPRGZk5P0jIMMHJNNY0riQf49v45X80xXtCFjTp4c00zQzi3kuf";

  const onToken = (token) => {
    console.log(token);
    console.log("Payment success");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Crwn Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your payable amount is $${price}`}
      amount={stripePrice}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
