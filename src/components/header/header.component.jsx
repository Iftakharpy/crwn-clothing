import React from "react";
import { NavLink } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/logo.svg";

import "./header.styles.scss";

function Header({ routes, base = "" }) {
  return (
    <header className="header">
      <NavLink className="logo-container" to={`${base}/`}>
        <Logo></Logo>
      </NavLink>
      <div className="options">
        {routes.map((route) => (
          <NavLink
            key={route.path}
            style={({ isActive }) =>
              isActive ? { backgroundColor: "pink" } : {}
            }
            className="option"
            to={route.path}
          >
            {route.name}
          </NavLink>
        ))}
      </div>
    </header>
  );
}

export default Header;
