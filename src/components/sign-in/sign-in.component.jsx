import React, { Component } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import "./sign-in.sytles.scss";

export default class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
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
          <CustomButton type="submit">Sign In</CustomButton>
        </form>
      </div>
    );
  }
}
