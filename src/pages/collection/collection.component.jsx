import React from "react";
import { useParams } from "react-router-dom";

import CollectionItem from "../../components/collection-item/collection-item.component";

import "./collection.styles.scss";

function Collection() {
  let { collectionId } = useParams();
  return <div className="category">{collectionId} Collection Page</div>;
}

export default Collection;
