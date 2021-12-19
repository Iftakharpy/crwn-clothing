import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";

import { useSelector } from "react-redux";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

import { BASE } from "../../App";

import "./sign-in-and-sign-up.styles.scss";

const SingInAndSignUp = (props) => {
  const { user } = useSelector((state) => state);

  useEffect(() => {
    // When component mounts change page title
    if (props?.pageTitle) document.title = props?.pageTitle;
    return () => {
      // When component unmounts change page title to default title
      if (props?.defaultPageTitle) document.title = props?.defaultPageTitle;
    };
  });

  if (user) return <Navigate to={`/${BASE}/`} />;
  return (
    <div className="sign-in-and-sign-up">
      <SignIn currentUser={user} />
      <SignUp currentUser={user} />
    </div>
  );
};

export default SingInAndSignUp;
