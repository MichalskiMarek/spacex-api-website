import React from "react";
import styled from "styled-components";

const StyledLabel = styled.label`
  padding: 10px;
  color: #ffffff;
  display: flex;
  align-items: center;
`;

const Input = props => {
  return (
    <StyledLabel>
      {props.label}
      {props.children}
    </StyledLabel>
  );
};

export default Input;
