import React from "react";

const ModalWrapper = (props) => {
  return (
    <div className={`modal-wrapper ${props.show && "show"}`}>
      {props.children}
    </div>
  );
};

export default ModalWrapper;
