import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";

import { useSelector } from "react-redux";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

import "./sign-in-and-sign-up.styles.scss";

const SingInAndSignUp = (props) => {
  const { currentUser } = useSelector((state) => state.user);
  const BASE = useSelector((state) => state.defaults.base);

  useEffect(() => {
    // When component mounts change page title
    if (props?.pageTitle) document.title = props?.pageTitle;
    return () => {
      // When component unmounts change page title to default title
      if (props?.defaultPageTitle) document.title = props?.defaultPageTitle;
    };
  });

  if (currentUser) return <Navigate to={`${BASE}`} />;
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SingInAndSignUp;
