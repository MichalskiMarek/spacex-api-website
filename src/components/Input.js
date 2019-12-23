import React, { useState } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  margin-left: 12px;
  border: none;
  height: 20px;
  border-radius: 3px;
  font-size: 16px;
`;

const Input = props => {
  const [input, setInput] = useState({});

  const handleInputChange = e => {
    const value =
      e.currentTarget.type === "checkbox"
        ? e.currentTarget.checked
        : e.currentTarget.value;
    setInput({
      ...input,
      [e.currentTarget.name]: value
    });
  };

  return (
    <StyledInput
      type={props.inputType}
      name={props.name}
      onChange={handleInputChange}
    />
  );
};

export default Input;
