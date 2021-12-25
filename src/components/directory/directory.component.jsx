import React from "react";
import MenuItem from "../menu-item/menu-item.component";

import { useSelector } from "react-redux";

import "./directory.styles.scss";

function Directory() {
  const { sections } = useSelector((state) => state.directory);
  return (
    <div className="directory-menu">
      {sections.map((section) => {
        return <MenuItem key={section.id} section={section} />;
      })}
    </div>
  );
}

export default Directory;
