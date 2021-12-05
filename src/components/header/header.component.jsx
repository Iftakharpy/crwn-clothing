import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/logo.svg";

import "./header.styles.scss";

function Header({ base = "" }) {
  return (
    <header className="header">
      <Link className="logo-container" to={`${base}/`}>
        <Logo></Logo>
      </Link>
      <div className="options">
        <Link className="option" to={`${base}/`}>
          Home
        </Link>
        <Link className="option" to={`${base}/shop`}>
          Shop
        </Link>
      </div>
    </header>
  );
}

export default Header;
