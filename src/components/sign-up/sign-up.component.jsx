import React, { Component } from "react";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import "./sign-up.styles.scss";

export class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords didn't match!");
      return;
    }

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (e) {
      console.error(e);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with email</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            label="Display Name"
            type="text"
            name="displayName"
            value={displayName}
            required
          />
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
          <FormInput
            handleChange={this.handleChange}
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            required
          />
          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
