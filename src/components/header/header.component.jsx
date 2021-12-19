import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { signOut } from "firebase/auth";

import ShoppingCart from "../cart-icon/cart-icon.component";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { BASE } from "../../App";
import { auth } from "../../firebase/firebase.utils";

import "./header.styles.scss";

const Header = (props) => {
  const signInRoute = {
    path: `${BASE}/signin`,
    name: "Signin",
  };
  const { routes, base = "" } = props;
  const currentUser = useSelector((state) => {
    return state.user;
  });

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

        {currentUser ? (
          <>
            <div className="option" onClick={() => signOut(auth)}>
              SignOut
            </div>
            <ShoppingCart />
          </>
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
      </div>
    </header>
  );
};

export default Header;
