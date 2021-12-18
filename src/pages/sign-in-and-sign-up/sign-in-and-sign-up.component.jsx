import React, { Component } from "react";
import { Navigate } from "react-router-dom";

import { connect } from "react-redux";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

import { BASE } from "../../App";

import "./sign-in-and-sign-up.styles.scss";

class SingInAndSignUp extends Component {
  componentDidMount = () => {
    const { pageTitle = null } = this.props;
    if (pageTitle !== null) document.title = pageTitle;
  };
  componentWillUnmount = () => {
    const { defaultPageTitle = null } = this.props;
    if (defaultPageTitle !== null) document.title = defaultPageTitle;
  };

  render() {
    const { currentUser } = this.props;
    if (currentUser) return <Navigate to={`/${BASE}/`} />;
    return (
      <div className="sign-in-and-sign-up">
        <SignIn {...this.props} />
        <SignUp {...this.props} />
      </div>
    );
  }
}

const mapStateTopProps = (state) => ({ currentUser: state.user.currentUser });

export default connect(mapStateTopProps)(SingInAndSignUp);
