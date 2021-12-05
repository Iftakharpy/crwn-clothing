import React, { Component } from "react";
import SignIn from "../../components/sign-in/sign-in.component";

export default class SingInAndSignUp extends Component {
  componentDidMount = () => {
    const { pageTitle = null } = this.props;
    if (pageTitle !== null) document.title = pageTitle;
  };
  componentWillUnmount = () => {
    const { defaultPageTitle = null } = this.props;
    if (defaultPageTitle !== null) document.title = defaultPageTitle;
  };

  render() {
    return (
      <div className="sign-in-and-sign-up">
        <SignIn />
      </div>
    );
  }
}