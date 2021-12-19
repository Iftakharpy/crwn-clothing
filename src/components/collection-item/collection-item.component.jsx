// react
import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { addItem, increaseCount } from "../../redux/features/cart/cartSlice";

import CustomButton from "../custom-button/custom-button.component";

// style
import "./collection-item.style.scss";

const CollectionItem = (product) => {
  let cartItems = useSelector((state) => state.cart.items);
  const { name, price, imageUrl } = product;
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
          let productInCart = false;
          cartItems.forEach((element) => {
            if (element.product.id === product.id) {
              productInCart = true;
              return;
            }
          });
          productInCart
            ? dispatch(increaseCount(product))
            : dispatch(addItem(product));
        }}
        inverted
      >
        Add to cart
      </CustomButton>
    </div>
  );
};

export default CollectionItem;
