// React
import React, { Component } from "react";

// Custom components
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

// Data
import SHOP_DATA from "./shopData";

export default class Shop extends Component {
  constructor() {
    super();
    this.state = { SHOP_DATA: SHOP_DATA };
  }

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
      <main className="shop-page">
        {this.state.SHOP_DATA.map(({ id, ...otherData }) => (
          <article key={id}>{<CollectionPreview {...otherData} />}</article>
        ))}
      </main>
    );
  }
}
