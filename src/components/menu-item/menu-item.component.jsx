import React from "react";
import "./menu-item.styles.scss";

function MenuItem({ title, imageUrl, size }) {
  return (
    <section
      className={`${size} menu-item`}
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">Shop Now</span>
      </div>
    </section>
  );
}

export default MenuItem;
