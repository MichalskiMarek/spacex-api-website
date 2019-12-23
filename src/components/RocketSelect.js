import React from "react";
import styled from "styled-components";

const StyledSelect = styled.select`
  margin-left: 12px;
  border: none;
  height: 22px;
  border-radius: 3px;
  font-size: 16px;
`;

const Navigation = () => {
  return (
    <StyledSelect>
      <option value="all">all</option>
      <option value="dog">Dog</option>
      <option value="cat">Cat</option>
      <option value="hamster">Hamster</option>
      <option value="parrot">Parrot</option>
      <option value="spider">Spider</option>
      <option value="goldfish">Goldfish</option>
    </StyledSelect>
  );
};

export default Navigation;
