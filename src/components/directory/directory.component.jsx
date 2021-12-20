import React from "react";
import MenuItem from "../menu-item/menu-item.component";

import { useSelector } from "react-redux";

import "./directory.styles.scss";

function Directory() {
  const { sections } = useSelector((state) => state.directory);
  return (
    <div className="directory-menu">
      {sections.map(({ id, title, imageUrl, size }) => {
        return (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        );
      })}
    </div>
  );
}

export default Directory;
