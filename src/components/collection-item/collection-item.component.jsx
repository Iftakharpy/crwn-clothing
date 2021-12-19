// react
import React from "react";

import CustomButton from "../custom-button/custom-button.component";

// style
import "./collection-item.style.scss";

export default function CollectionItem({ id, name, price, imageUrl }) {
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <CustomButton inverted>Add to cart</CustomButton>
    </div>
  );
}
