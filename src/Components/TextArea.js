import React from "react";
import PropTypes from "prop-types";

const TextAreaComponent = ({ value, onchange, placeholder, rows, cols }) => {
  return (
    <div className="textarea-component">
      <div style={{ flexGrow: "1" }}>
        <textarea
          defaultValue={value || ""}
          rows={rows}
          cols={cols}
          onChange={onchange}
          placeholder={placeholder}
        ></textarea>
      </div>
    </div>
  );
};

TextAreaComponent.propTypes = {
  onchange: PropTypes.func,
  placeholder: PropTypes.string,
};

TextAreaComponent.defaultProps = {
  placeholder: "Text Here",
  rows: 10,
};

export default TextAreaComponent;
