import React from "react";
import styled from "styled-components";

const StyledSelect = styled.select`
  margin-left: 12px;
  border: none;
  height: 22px;
  border-radius: 3px;
  font-size: 16px;
`;

const Select = props => {
  const options = props.options.map(option => {
    return (
      <option value={option} key={option}>
        {option}
      </option>
    );
  });
  return (
    <StyledSelect
      onChange={
        props.name === "rocketSelect"
          ? props.handleRocketSelect
          : props.handleSuccesfulLaunches
      }
    >
      <option value="All">All</option>
      {options}
    </StyledSelect>
  );
};

export default Select;
