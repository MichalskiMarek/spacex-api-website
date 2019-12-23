import React, { useState } from "react";
import styled from "styled-components";

const StyledInput = styled.input``;
const StyledLabel = styled.label`
  color: #ffffff;
`;

const Input = props => {
  const [input, setInput] = useState({});

  const handleInputChange = e =>
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value
    });
  return (
    <>
      <StyledLabel>{props.label}</StyledLabel>
      <StyledInput type="text" name={props.name} onChange={handleInputChange} />
    </>
  );
};

export default Input;
