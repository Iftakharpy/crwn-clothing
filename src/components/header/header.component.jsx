import React from "react";
import { Link } from "react-router-dom";

import "./header.styles.scss";

function Header({ base = "" }) {
  return (
    <header>
      <Link to={`${base}/`}>Home</Link>
      <Link to={`${base}/shop`}>Shop</Link>
    </header>
  );
}

export default Header;
