import React from "react";
import Arrow from "../images/ButtonArrow.svg";

const ButtonArrow = (props) => {
  const { style } = props;
  return (
    <div>
      <a
        className="button-arrow"
        style={{ ...style, fontSize: `${props.fontSize}` }}
        href={props.link}
      >
        {props.text} <img src={Arrow} alt="arrow" />
      </a>
    </div>
  );
};

export default ButtonArrow;
