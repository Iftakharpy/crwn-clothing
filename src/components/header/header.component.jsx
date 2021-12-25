import React from "react";
import { NavLink } from "react-router-dom";
import { signOut } from "firebase/auth";

import { useSelector } from "react-redux";

import ShoppingCart from "../cart-icon/cart-icon.component";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { auth } from "../../firebase/firebase.utils";

import "./header.styles.scss";

const Header = () => {
  const BASE = useSelector((state) => state.defaults.base);
  const { currentUser } = useSelector((state) => state.user);

  const routes = [
    {
      path: `${BASE}`,
      name: "Home",
    },
    {
      path: `${BASE}shop`,
      name: "Shop",
    },
  ];

  const signInRoute = {
    path: `${BASE}signin`,
    name: "Signin",
  };

  return (
    <header className="header">
      <NavLink className="logo-container" to={`${BASE}`}>
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

        {currentUser ? (
          <div className="option" onClick={() => signOut(auth)}>
            SignOut
          </div>
        ) : (
          <NavLink
            key={signInRoute.path}
            style={({ isActive }) =>
              isActive ? { backgroundColor: "pink" } : {}
            }
            className="option"
            to={signInRoute.path}
          >
            {signInRoute.name}
          </NavLink>
        )}

        <ShoppingCart />
      </div>
    </header>
  );
};

export default Header;
