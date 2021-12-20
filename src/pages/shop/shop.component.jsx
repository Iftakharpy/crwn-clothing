// React
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

// Custom components
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

const Shop = (props) => {
  const { pageTitle = null, defaultPageTitle = null } = props;
  useEffect(() => {
    if (pageTitle !== null) document.title = pageTitle;
    return () => {
      if (defaultPageTitle !== null) document.title = defaultPageTitle;
    };
  });

  const { SHOP_DATA } = useSelector((state) => state.shop);

  return (
    <main className="shop-page">
      {SHOP_DATA.map(({ id, ...otherData }) => (
        <article key={id}>{<CollectionPreview {...otherData} />}</article>
      ))}
    </main>
  );
};

export default Shop;
