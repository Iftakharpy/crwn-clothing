import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import CollectionItem from "../../components/collection-item/collection-item.component";

import "./collection.styles.scss";

function Collection() {
  let { collectionId } = useParams();
  let { SHOP_DATA } = useSelector((state) => state.shop);
  let { title, items } = SHOP_DATA.find(
    (category) => category.routeName === collectionId
  );

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Collection;
