import React, { Component } from "react";

import Directory from "../../components/directory/directory.component";
import { HomePageContainer } from "./homepage.styled";

export default class HomePage extends Component {
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
      <HomePageContainer>
        <Directory />
      </HomePageContainer>
    );
  }
}
