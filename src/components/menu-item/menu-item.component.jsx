import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./menu-item.styles.scss";

function MenuItem({ section }) {
  const { title, size, imageUrl, linkUrl } = section;
  const navigate = useNavigate();
  const BASE = useSelector((state) => state.defaults.base);

  return (
    <section
      className={`${size} menu-item`}
      onClick={() => navigate(`${BASE}${linkUrl}`)}
    >
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
