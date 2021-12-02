import React from "react";
import "./menu-item.styles.scss";

function MenuItem({ title, imageUrl, size }) {
  return (
    <section className={`${size} menu-item`}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">Shop Now</span>
      </div>
    </section>
  );
}

export default MenuItem;
