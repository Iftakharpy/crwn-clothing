import React from "react";
import { signOut } from "firebase/auth";

import { useSelector } from "react-redux";

import ShoppingCart from "../cart-icon/cart-icon.component";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { auth } from "../../firebase/firebase.utils";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  Option,
} from "./header.styled";

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
    <HeaderContainer>
      <LogoContainer to={`${BASE}`}>
        <Logo></Logo>
      </LogoContainer>
      <OptionsContainer>
        {routes.map((route) => (
          <Option key={route.path} to={route.path}>
            {route.name}
          </Option>
        ))}

        {currentUser ? (
          <Option as="div" onClick={() => signOut(auth)}>
            SignOut
          </Option>
        ) : (
          <Option key={signInRoute.path} to={signInRoute.path}>
            {signInRoute.name}
          </Option>
        )}

        <ShoppingCart />
      </OptionsContainer>
    </HeaderContainer>
  );
};

export default Header;
