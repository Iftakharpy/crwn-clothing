import React from "react";

import { ReactComponent as Logo } from "./NotFound.svg";

import "./NotFound.styles.scss";

function NotFound() {
  return (
    <div class="main">
      <Logo></Logo>
      <span className="message">Sorry! Page Not Found</span>
    </div>
  );
}

export default NotFound;
