// React
import React, { useEffect } from "react";

import { useSelector } from "react-redux";

// Custom components
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";

const Shop = (props) => {
  const { pageTitle = null } = props;
  const { defaultPageTitle } = useSelector((state) => state.defaults);

  useEffect(() => {
    if (pageTitle !== null) document.title = pageTitle;
    return () => {
      if (defaultPageTitle !== null) document.title = defaultPageTitle;
    };
  });

  return (
    <main className="shop-page">
      <CollectionsOverview />
    </main>
  );
};

export default Shop;
