// react
import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { addItem, increaseCount } from "../../redux/features/cart/cartSlice";

import CustomButton from "../custom-button/custom-button.component";

// style
import "./collection-item.style.scss";

const CollectionItem = ({ item }) => {
  let cartItems = useSelector((state) => state.cart.items);
  const { name, price, imageUrl } = item;
  const dispatch = useDispatch();
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
      <CustomButton
        onClick={() => {
          let itemInCart = false;
          cartItems.forEach((element) => {
            if (element.product.id === item.id) {
              itemInCart = true;
              return;
            }
          });
          itemInCart ? dispatch(increaseCount(item)) : dispatch(addItem(item));
        }}
        inverted
      >
        Add to cart
      </CustomButton>
    </div>
  );
};

export default CollectionItem;
