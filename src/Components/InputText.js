import React from "react";
import PropTypes from "prop-types";
// import {ucfirst} from "../Helpers";
import "../scss/InputText.scss";

const InputText = ({ label, value, disabled, onchange }) => {
  return (
    <div className="InputText">
      <div>
        <label className="">{label}</label>
      </div>
      <div style={{ flexGrow: "1" }}>
        <input
          type="text"
          defaultValue={value || ""}
          onChange={onchange}
          disabled={disabled}
        />
      </div>
    </div>
  );
};

InputText.propTypes = {
  label: PropTypes.string.isRequired,
  classes: PropTypes.string,
  disabled: PropTypes.bool,
  onchange: PropTypes.func,
};

InputText.defaultProps = {
  label: "placeholder",
  disabled: false,
};

export default InputText;
