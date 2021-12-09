import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { signOut, onAuthStateChanged } from "firebase/auth";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import { BASE } from "../../App";
import { auth } from "../../firebase/firebase.utils";

import "./header.styles.scss";

export class Header extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
    this.signInRoute = {
      path: `${BASE}/signin`,
      name: "Signin",
    };
  }

  componentDidMount = () => {
    this.unsubscribeLoginEvent = onAuthStateChanged(auth, (user) => {
      this.setState({ currentUser: user });
    });
  };

  componentWillUnmount = () => this.unsubscribeLoginEvent();

  render() {
    const { routes, base = "" } = this.props;
    const { currentUser } = this.state;
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

export default Header;
