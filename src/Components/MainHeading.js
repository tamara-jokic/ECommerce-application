import React from "react";
import PropTypes from "prop-types";

const MainHeading = ({ text, classes }) => {
  return <h1 className={`main-heading ${classes}`}>{text}</h1>;
};

MainHeading.propTypes = {
  text: PropTypes.string.isRequired,
  classes: PropTypes.string,
};

export default MainHeading;
