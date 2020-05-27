import React, { useState } from "react";

const UseField = (initialValue = "") => {
  const [fieldValue, setFieldValue] = useState(initialValue);

  const onChange = (e) => {
    setFieldValue(e.target.value);
  };

  return [fieldValue, onChange];
};

export default UseField;
