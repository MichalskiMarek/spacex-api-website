import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  margin-left: 12px;
  border: none;
  height: 20px;
  border-radius: 3px;
  font-size: 16px;
`;

const Input = props => {
  return (
    <StyledInput
      type={props.inputType}
      name={props.name}
      onChange={props.handleSearchLaunches}
    />
  );
};

export default Input;
