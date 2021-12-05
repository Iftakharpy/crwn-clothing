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
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </section>
  );
}

export default MenuItem;