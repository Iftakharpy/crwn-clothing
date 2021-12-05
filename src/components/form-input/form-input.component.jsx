import React from "react";

import "./form-input.styles.scss";

function FormInput({ handleChange, label, ...otherInputProps }) {
  return (
    <div className="group">
      <input
        className="form-input"
        {...otherInputProps}
        onChange={handleChange}
      />
      {label ? (
        <label
          className={`form-input-label ${
            otherInputProps.value.length > 0 ? "shrink" : ""
          }`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
}

export default FormInput;
