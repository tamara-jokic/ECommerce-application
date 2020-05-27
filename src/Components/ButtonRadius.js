import React from "react";
import "../scss/ButtonRadius.scss";
import PropTypes from "prop-types";

const ButtonRadius = ({ classes, text, onclick }) => {
  return (
    <button
      type="button"
      className={`ButtonRadius ${classes}`}
      onClick={onclick}
    >
      {text}
    </button>
  );
};

ButtonRadius.propTypes = {
  text: PropTypes.string.isRequired,
  classes: PropTypes.string,
  onclick: PropTypes.func,
};

ButtonRadius.defaultProps = {
  text: "send",
};

export default ButtonRadius;
