import React, { Component } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, googleAuthProvider } from "../../firebase/firebase.utils";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";

import "./sign-in.sytles.scss";

export default class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
      email: "",
      password: "",
    };
  }

  componentDidMount = () => {
    this.unsubscribeFromAuthStateChangeEvent = onAuthStateChanged(
      auth,
      (user) => {
        if (user !== null) {
          this.setState({ currentUser: user });
          console.log("User signed in", user);
        } else {
          this.setState({ currentUser: null });
          console.log("User signed out");
        }
      }
    );
  };
  componentWillUnmount = () => {
    this.unsubscribeFromAuthStateChangeEvent();
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password, currentUser } = this.state;
    if (currentUser !== null)
      return (
        <div>
          Welcome {currentUser.displayName}. You are already Signed in.
          <div>
            <CustomButton onClick={() => signOut(auth)}>Signout</CustomButton>
          </div>
        </div>
      );
    return (
      <div className="sign-in">
        <h1>Already have an account?</h1>
        <span className="title">Sign in with your email and password</span>
        <form action="" onSubmit={this.handleFormSubmit}>
          <FormInput
            handleChange={this.handleChange}
            label="Email"
            type="email"
            name="email"
            value={email}
            required
          />
          <FormInput
            handleChange={this.handleChange}
            label="Password"
            type="password"
            name="password"
            value={password}
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton
              onClick={() => {
                signInWithPopup(auth, googleAuthProvider);
              }}
              isGoogleSignIn
            >
              Google Sign In
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
