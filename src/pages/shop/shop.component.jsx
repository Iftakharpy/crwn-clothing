// React
import React, { Component } from "react";

// Custom components
import CollectionPreview from "../../components/preview-collection/collection-preview.component";

// Data
import SHOP_DATA from "./shopData";

export default class Shop extends Component {
  constructor() {
    super();
    this.state = { SHOP_DATA: SHOP_DATA };
  }

  render() {
    return (
      <main className="shop-page">
        {this.state.SHOP_DATA.map(({ id, ...otherData }) => (
          <article id={id}>{<CollectionPreview {...otherData} />}</article>
        ))}
      </main>
    );
  }
}
