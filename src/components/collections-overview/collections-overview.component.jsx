import React from "react";

import { useSelector } from "react-redux";

import CollectionPreview from "../collection-preview/collection-preview.component";

import "./collections-overview.styles.scss";

function CollectionsOverview() {
  const { SHOP_DATA } = useSelector((state) => state.shop);
  return (
    <div className="collections-overview">
      {SHOP_DATA.map(({ id, ...otherData }) => (
        <article key={id}>{<CollectionPreview {...otherData} />}</article>
      ))}
    </div>
  );
}

export default CollectionsOverview;
