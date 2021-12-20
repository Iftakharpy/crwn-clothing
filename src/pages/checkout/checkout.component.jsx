import React, { useEffect } from "react";

import "./checkout.styles.scss";

const Checkout = (props) => {
  useEffect(() => {
    // When component mounts change page title
    if (props?.pageTitle) document.title = props?.pageTitle;
    return () => {
      // When component unmounts change page title to default title
      if (props?.defaultPageTitle) document.title = props?.defaultPageTitle;
    };
  });

  return <main className="checkout">Checkout Page</main>;
};

export default Checkout;
