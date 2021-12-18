import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { signOut } from "firebase/auth";

import { connect } from "react-redux";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import { BASE } from "../../App";
import { auth } from "../../firebase/firebase.utils";

import "./header.styles.scss";

export class Header extends Component {
  constructor() {
    super();

    this.signInRoute = {
      path: `${BASE}/signin`,
      name: "Signin",
    };
  }

  render() {
    const { routes, base = "" } = this.props;
    const { currentUser } = this.props;
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
            <div className="option" onClick={() => signOut(auth)}>
              SignOut
            </div>
          ) : (
            <NavLink
              key={this.signInRoute.path}
              style={({ isActive }) =>
                isActive ? { backgroundColor: "pink" } : {}
              }
              className="option"
              to={this.signInRoute.path}
            >
              {this.signInRoute.name}
            </NavLink>
          )}
        </div>
      </header>
    );
  }
}

const mapStateTopProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateTopProps)(Header);
