import React, { Component } from "react";

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
    console.log(event);
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
        <span>Sign in with your email and password</span>
        <form action="" onSubmit={this.handleFormSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            required
            value={email}
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            required
            value={password}
            onChange={this.handleChange}
          />
          <input type="submit" value="Sign In" />
        </form>
      </div>
    );
  }
}
